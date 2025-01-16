"use client"



import Board from '@/app/component/Board';
import React from 'react';

// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

// const KanbanBoard = () => {
//   const [columns, setColumns] = useState([
//     { id: 1, title: 'To Do', color: 'bg-blue-200' },
//     { id: 2, title: 'In Progress', color: 'bg-yellow-200' },
//     { id: 3, title: 'Done', color: 'bg-green-200' },
//   ]);

//   const [cards, setCards] = useState([
//     { id: 1, columnId: 1, title: 'Task 1', description: 'Description for Task 1' },
//     { id: 2, columnId: 2, title: 'Task 2', description: 'Description for Task 2' },
//     { id: 3, columnId: 3, title: 'Task 3', description: 'Description for Task 3' },
//   ]);

//   const [isAddingColumn, setIsAddingColumn] = useState(false);
//   const [isAddingCard, setIsAddingCard] = useState(false);
//   const [activeColumn, setActiveColumn] = useState(null);

//   const nextCardId = useRef(4);
//   const nextColumnId = useRef(4);

//   useEffect(() => {
//     const savedColumns = localStorage.getItem('kanbanColumns');
//     const savedCards = localStorage.getItem('kanbanCards');
//     if (savedColumns) setColumns(JSON.parse(savedColumns));
//     if (savedCards) setCards(JSON.parse(savedCards));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('kanbanColumns', JSON.stringify(columns));
//     localStorage.setItem('kanbanCards', JSON.stringify(cards));
//   }, [columns, cards]);

//   const moveCard = (cardId, targetColumnId) => {
//     setCards(cards.map(card => 
//       card.id === cardId ? { ...card, columnId: targetColumnId } : card
//     ));
//   };

//   const addColumn = (title, color) => {
//     const newColumn = { id: nextColumnId.current++, title, color };
//     setColumns([...columns, newColumn]);
//     setIsAddingColumn(false);
//   };

//   const addCard = (columnId, title, description) => {
//     const newCard = { id: nextCardId.current++, columnId, title, description };
//     setCards([...cards, newCard]);
//     setIsAddingCard(false);
//   };

//   const editColumn = (id, title, color) => {
//     setColumns(columns.map(column =>
//       column.id === id ? { ...column, title, color } : column
//     ));
//   };

//   const deleteColumn = (id) => {
//     setColumns(columns.filter(column => column.id !== id));
//     setCards(cards.filter(card => card.columnId !== id));
//   };

//   const editCard = (id, title, description) => {
//     setCards(cards.map(card =>
//       card.id === id ? { ...card, title, description } : card
//     ));
//   };

//   const deleteCard = (id) => {
//     setCards(cards.filter(card => card.id !== id));
//   };

//   const Column = ({ column }) => {
//     const [{ isOver }, drop] = useDrop({
//       accept: 'CARD',
//       drop: (item) => moveCard(item.id, column.id),
//       collect: (monitor) => ({
//         isOver: !!monitor.isOver(),
//       }),
//     });

//     return (
//       <div
//         ref={drop}
//         className={`flex flex-col p-4 m-2 rounded-lg shadow-md ${column.color} ${isOver ? 'ring-2 ring-blue-500' : ''}`}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold">{column.title}</h2>
//           <div>
//             <button
//               onClick={() => setActiveColumn(column.id)}
//               className="p-1 mr-2 text-gray-600 hover:text-gray-800"
//               aria-label="Edit column"
//             >
//               <FaEdit />
//             </button>
//             <button
//               onClick={() => deleteColumn(column.id)}
//               className="p-1 text-red-600 hover:text-red-800"
//               aria-label="Delete column"
//             >
//               <FaTrash />
//             </button>
//           </div>
//         </div>
//         {cards.filter(card => card.columnId === column.id).map(card => (
//           <Card key={card.id} card={card} />
//         ))}
//         <button
//           onClick={() => {
//             setIsAddingCard(true);
//             setActiveColumn(column.id);
//           }}
//           className="mt-4 p-2 bg-white text-gray-700 rounded hover:bg-gray-100 transition-colors"
//         >
//           <FaPlus className="inline mr-2" /> Add Card
//         </button>
//       </div>
//     );
//   };

//   const Card = ({ card }) => {
//     const [{ isDragging }, drag] = useDrag({
//       type: 'CARD',
//       item: { id: card.id },
//       collect: (monitor) => ({
//         isDragging: !!monitor.isDragging(),
//       }),
//     });

//     return (
//       <div
//         ref={drag}
//         className={`p-4 mb-4 bg-white rounded shadow ${isDragging ? 'opacity-50' : ''}`}
//       >
//         <h3 className="font-bold mb-2">{card.title}</h3>
//         <p className="text-sm text-gray-600">{card.description}</p>
//         <div className="mt-4 flex justify-end">
//           <button
//             onClick={() => editCard(card.id, card.title, card.description)}
//             className="p-1 mr-2 text-gray-600 hover:text-gray-800"
//             aria-label="Edit card"
//           >
//             <FaEdit />
//           </button>
//           <button
//             onClick={() => deleteCard(card.id)}
//             className="p-1 text-red-600 hover:text-red-800"
//             aria-label="Delete card"
//           >
//             <FaTrash />
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const AddColumnForm = () => {
//     const [title, setTitle] = useState('');
//     const [color, setColor] = useState('bg-gray-200');

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//         <div className="bg-white p-6 rounded-lg">
//           <h2 className="text-xl font-bold mb-4">Add New Column</h2>
//           <input
//             type="text"
//             placeholder="Column Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-2 mb-4 border rounded"
//           />
//           <select
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//             className="w-full p-2 mb-4 border rounded"
//           >
//             <option value="bg-gray-200">Gray</option>
//             <option value="bg-red-200">Red</option>
//             <option value="bg-blue-200">Blue</option>
//             <option value="bg-green-200">Green</option>
//             <option value="bg-yellow-200">Yellow</option>
//           </select>
//           <div className="flex justify-end">
//             <button
//               onClick={() => setIsAddingColumn(false)}
//               className="px-4 py-2 mr-2 text-gray-600 hover:text-gray-800"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={() => addColumn(title, color)}
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Add Column
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const AddCardForm = () => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//         <div className="bg-white p-6 rounded-lg">
//           <h2 className="text-xl font-bold mb-4">Add New Card</h2>
//           <input
//             type="text"
//             placeholder="Card Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-2 mb-4 border rounded"
//           />
//           <textarea
//             placeholder="Card Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full p-2 mb-4 border rounded"
//           ></textarea>
//           <div className="flex justify-end">
//             <button
//               onClick={() => setIsAddingCard(false)}
//               className="px-4 py-2 mr-2 text-gray-600 hover:text-gray-800"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={() => addCard(activeColumn, title, description)}
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Add Card
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="min-h-screen bg-gray-100 p-8">
//         <h1 className="text-3xl font-bold mb-8 text-center">Kanban Board</h1>
//         <div className="flex flex-wrap justify-center">
//           {columns.map(column => (
//             <Column key={column.id} column={column} />
//           ))}
//           <button
//             onClick={() => setIsAddingColumn(true)}
//             className="p-4 m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//             <FaPlus className="inline mr-2" /> Add Column
//           </button>
//         </div>
//         {isAddingColumn && <AddColumnForm />}
//         {isAddingCard && <AddCardForm />}
//       </div>
//     </DndProvider>
//   );
// };

// export default KanbanBoard;

const KanBanBoard = () => {
  return(
    <div>
      <Board/>
    </div>
  )
}