import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <h1 className="text-center">Tron To-Do List</h1>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className={`list-group-item ${task.completed ? 'completed' : ''}`}>
            <input type="checkbox" className="mr-2" onChange={() => toggleTask(index)} />
            {task.text}
          </li>
        ))}
      </ul>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          aria-label="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn" onClick={addTask}>+</button>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn" onClick={deleteCompletedTasks}>Delete Completed Tasks</button>
        <button className="btn ml-2" onClick={deleteAllTasks}>Delete All</button>
      </div>
    </div>
  );
}

export default App;
