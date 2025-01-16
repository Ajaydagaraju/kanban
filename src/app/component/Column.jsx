// components/Column.js
import React from 'react';
import { useDrop } from '@dnd-kit/core';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { updateCard } from '@/redux/slice/boardSlice';

const Column = ({ column, cards }) => {
  const dispatch = useDispatch();

  const { setNodeRef } = useDrop({
    accept: 'CARD',
    drop: (item) => {
      dispatch(updateCard({ id: item.id, columnId: column.id }));
    },
  });

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-2">{column.title}</h2>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Column;
