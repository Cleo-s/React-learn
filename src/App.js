import React, { useState, useEffect } from 'react';
import Input from './components/Input/index.jsx';
import Button from './components/Button/index.jsx';
import TrashBinIcon from './components/Icons/TrashBinIcon/index';
import AddTaskIcon from './components/Icons/AddTaskIcon/index';
import './App.css';

function App() {

  const storedTasks = JSON.parse(sessionStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(storedTasks);
  const [taskTitle, setNewTask] = useState('');

  useEffect(() => {
    if (tasks.length > 0)
      sessionStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const handleTaskAdd = () => {
    if (taskTitle.length === 0) return;
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
          icon={<AddTaskIcon/>}
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
                onClick={() => handleTaskDelete(index)}
                icon={<TrashBinIcon />} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;