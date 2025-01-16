// components/Card.js
import React from 'react';
import { useDrag } from '@dnd-kit/core';

const Card = ({ card }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDrag({
    id: card.id,
    type: 'CARD',
    data: { id: card.id },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`p-4 mb-2 bg-white rounded-lg shadow-md ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <h3 className="font-semibold">{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
};

export default Card;
