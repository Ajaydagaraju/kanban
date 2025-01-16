import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [],
  columns: [],
  cards: [],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    addBoard: (state, action) => {
      state.boards.push(action.payload);
    },
    addColumn: (state, action) => {
      state.columns.push(action.payload);
    },
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    updateBoard: (state, action) => {
      const index = state.boards.findIndex(board => board.id === action.payload.id);
      if (index !== -1) {
        state.boards[index] = action.payload;
      }
    },
    updateColumn: (state, action) => {
      const index = state.columns.findIndex(column => column.id === action.payload.id);
      if (index !== -1) {
        state.columns[index] = action.payload;
      }
    },
    updateCard: (state, action) => {
      const index = state.cards.findIndex(card => card.id === action.payload.id);
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },
    deleteBoard: (state, action) => {
      state.boards = state.boards.filter(board => board.id !== action.payload);
    },
    deleteColumn: (state, action) => {
      state.columns = state.columns.filter(column => column.id !== action.payload);
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter(card => card.id !== action.payload);
    },
  },
});

export const {
  setBoards,
  setColumns,
  setCards,
  addBoard,
  addColumn,
addCard,
updateBoard,
updateColumn,
updateCard,
deleteBoard,
deleteColumn,
deleteCard,
} = boardSlice.actions;

export default boardSlice.reducer;
