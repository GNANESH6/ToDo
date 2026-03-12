import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './index.css';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (e) {
        return [];
      }
    }
    return [
      { id: '1', text: 'Learn React', completed: true },
      { id: '2', text: 'Build a glassmorphism UI', completed: false },
      { id: '3', text: 'Master modern animations', completed: false }
    ];
  });
  
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    // Small delay to allow scaleOut animation if we were doing it on delete, but slide down adjusts instantly.
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;

  return (
    <>
      <div className="bg-shape sl-aura"></div>
      <div className="bg-shape aot-steam"></div>
      <div className="bg-shape nrt-chakra"></div>
      
      <div className="app-container">
        <div className="glass-panel">
          <h1 className="title">DEATH NOTE</h1>
          
          <TodoInput addTodo={addTodo} />
          
          <div className="filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Quests
            </button>
            <button 
              className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button 
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
          
          <TodoList 
            todos={filteredTodos} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo} 
          />
          
          {todos.length > 0 && (
            <div className="todo-footer">
              <span>{activeCount} {activeCount === 1 ? 'target' : 'targets'} remaining</span>
              <button className="clear-btn" onClick={clearCompleted}>Erase Written</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
