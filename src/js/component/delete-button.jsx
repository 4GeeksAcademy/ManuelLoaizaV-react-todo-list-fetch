import React from 'react';

export default function DeleteButton({ taskIndex, color, onClickHandler, onDeleteButtonHandler }) {
    return (
        <i className={`fa-solid fa-x text-${color}`} onMouseOver={event => onDeleteButtonHandler(event)} onClick={() => onClickHandler(taskIndex)}></i>
    );
};
