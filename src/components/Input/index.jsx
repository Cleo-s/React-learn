import React from 'react';
import './Input.css';

export default function Input({value, onChange}) {
    return (
        <input 
        type='text' 
        placeholder='Write your task' 
        className='to-do-input'
        value={value}
        onChange={onChange}
        />
    ) 
}