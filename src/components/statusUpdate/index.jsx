import React from 'react';

import './StatusUpdate.css';

function StatusUpdate({ status }) {

    return (
        <div className='status-update-div'>
            <p className='status-paragraph'>{status}</p>
        </div>
    )
}

export default StatusUpdate;