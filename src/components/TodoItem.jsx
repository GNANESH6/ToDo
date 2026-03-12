import './TodoItem.css';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label className="checkbox-container">
        <input 
          type="checkbox" 
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span className="checkmark"></span>
      </label>
      
      <span className="todo-text">{todo.text}</span>
      
      <button 
        className="delete-btn" 
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete task"
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;
