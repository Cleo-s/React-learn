import React from 'react';
import { useState } from 'react';

import Button from '../../Button/index';

import './DropDown.css';

function DropDown() {
    const [openedDropDown, setOpenedDropDown] = useState(false);

    const handleDropDown = () => {
        setOpenedDropDown(!openedDropDown);
    }

    return (
        <div className='dropdown-div'>
            <Button
            className='dropdown-button'
            onClick={handleDropDown}
            label='...'
            />
            {openedDropDown ? (
                <ul>
                    <li>
                        <Button
                        className='dropdown-button'
                        label='Not Ready'
                        />
                    </li>
                    <li>
                        <Button
                        className='dropdown-button'
                        label='In Progress'
                        />
                    </li>
                    <li>
                        <Button
                        className='dropdown-button'
                        label='Done'
                        />
                    </li>
                </ul>
            ) : null}
        </div>
    )
}

export default DropDown;