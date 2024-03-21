import React from 'react';
import { useState } from 'react';

import Button from '../../Button/index';

import ChevronDownIcon from '../../Icons/ChevronDownIcon/index';
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
            icon={<ChevronDownIcon />}
            />
            {openedDropDown ? (
                <ul className='dropdown-table'>
                    <li>
                        <Button
                        className='pending-dropdown-button'
                        label='Pending'
                        />
                    </li>
                    <li>
                        <Button
                        className='working-dropdown-button'
                        label='Working'
                        />
                    </li>
                    <li>
                        <Button
                        className='done-dropdown-button'
                        label='Done'
                        />
                    </li>
                </ul>
            ) : null}
        </div>
    )
}

export default DropDown;