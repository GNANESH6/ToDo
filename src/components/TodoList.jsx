import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Break the ice and add one!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </ul>
  );
}

export default TodoList;
