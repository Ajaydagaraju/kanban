// components/Board.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndContext } from '@dnd-kit/core';
import Column from './Column';
import AddColumnForm from './AddColumnForm';
import axios from 'axios';
import { setCards, setColumns } from '@/redux/slice/boardSlice';

const Board = () => {
  const dispatch = useDispatch();
  const columns = useSelector(state => state.board.columns);
  const cards = useSelector(state => state.board.cards);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const columnsResponse = await axios.get('/api/columns');
        const cardsResponse = await axios.get('/api/cards');
        dispatch(setColumns(columnsResponse.data));
        dispatch(setCards(cardsResponse.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <DndContext>
      <div className="flex space-x-4">
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            cards={cards.filter((card) => card.columnId === column.id)}
          />
        ))}
        <AddColumnForm />
      </div>
    </DndContext>
  );
};

export default Board;
