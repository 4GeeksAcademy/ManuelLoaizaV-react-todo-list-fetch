import React from 'react';

export default function DeleteTaskButton({ taskId, color, onClickHandler, onDeleteTaskButtonHandler }) {
    return (
        <i className={`fa-solid fa-x text-${color}`} onMouseOver={event => onDeleteTaskButtonHandler(event)} onClick={() => onClickHandler(taskId)}></i>
    );
};
