import React, { useState } from 'react';
import DeleteTaskButton from './delete-task-button';

export default function Task({ task, onClickHandler }) {
    const [deleteTaskButtonColor, setDeleteTaskButtonColor] = useState('white');

    function handleOnMouseOver() {
        setDeleteTaskButtonColor('secondary');
    }

    function handleOnMouseLeave() {
        setDeleteTaskButtonColor('white');
    }

    function handleOnDeleteTaskButton(event) {
        // I had an issue with handleOnMouseOver overwriting the color of this handler from danger to secondary.
        // After googling, I discover this particular event keeps propagating to every ancestor.
        // See https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
        event.stopPropagation();
        setDeleteTaskButtonColor('danger');
    }

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center shadow-lg' onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
            <p className='mb-0'>{task.description}</p>
            <DeleteTaskButton taskId={task.id} color={deleteTaskButtonColor} onClickHandler={onClickHandler} onDeleteTaskButtonHandler={handleOnDeleteTaskButton}/>
        </li>
    );
};
