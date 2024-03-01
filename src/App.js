import React, { useState } from 'react';
import Input from './components/Input/index.jsx';
import Button from './components/Button/index.jsx';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskTitle, setNewTask] = useState('');

  const handleTaskAdd = () => {
    setTasks([...tasks, taskTitle]);
    setNewTask('');
  }

  const handleTaskDelete = (index) => { 
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">

      <section className='header' >
        <Input
          value={taskTitle}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button
          className='add-task-button'
          label='Add Task'
          onClick={handleTaskAdd}
        />
      </section>

      <section className='tasks-section'>
        <ul className='tasks-table'>
          {tasks.map((task, index) => (
            <li
              key={index}>
              {task}
              <Button
                className='delete-task-button'
                label='Delete Task'
                onClick={handleTaskDelete}/>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App; 
