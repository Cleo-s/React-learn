import React from 'react';
import Input from './components/Input/index.jsx';
import Button from './components/Button/index.jsx';
import './App.css';

function App() {

  return (
    <div className="App">
      <section className='header' >
        <Input />
        <Button className='add-task-button' text='Add Task'/>
      </section>
    </div>
  );
}

export default App; 
