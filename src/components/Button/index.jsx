import React from 'react';
import './Button.css';

export default function Button({className, text}) {

    return (
        <button className={className}>{text}</button>
    )
}