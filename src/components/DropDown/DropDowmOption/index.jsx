import React from 'react';

import './dropDownOption.css';

function DropDownOption({ key, label, status, onClick, className }) {

    return (
        <button className={className} key={key} status={status} onClick={onClick}>{label}</button>
    )
}

export default DropDownOption;