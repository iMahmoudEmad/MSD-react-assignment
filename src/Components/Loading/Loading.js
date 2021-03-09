import React from 'react';
import { Refresh } from '@emotion-icons/material/Refresh';
import './Loading.scss';

const Loading = () => {
    return (
        <div className="loading">
            <Refresh className="refreshIcon" />
        </div>
    )
}

export default Loading
