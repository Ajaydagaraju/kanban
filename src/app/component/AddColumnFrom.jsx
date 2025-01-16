// components/AddColumnForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '@/redux/slice/boardSlice';

const AddColumnForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addColumn({ title }));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 bg-white rounded-lg shadow-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Column"
        className="p-2 mb-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Column
      </button>
    </form>
  );
};

export default AddColumnForm;
