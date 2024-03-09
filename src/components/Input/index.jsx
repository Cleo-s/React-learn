import React from 'react';

import './Input.css';

export default function Input({value, onChange, className, placeholder, type}) {
    return (
        <input 
        type={type} 
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        />
    ) 
}