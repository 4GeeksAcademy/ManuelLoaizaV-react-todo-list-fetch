import React, { useState } from 'react';
import DeleteButton from './delete-button';

export default function Task({ index, task, onClickHandler }) {
    const [buttonColor, setButtonColor] = useState('white');

    function handleOnMouseOver() {
        setButtonColor('secondary');
    }

    function handleOnMouseLeave() {
        setButtonColor('white');
    }

    function handleOnDeleteButton(event) {
        // I had an issue with handleOnMouseOver overwriting the color of this handler from danger to secondary.
        // After googling, I discover this particular event keeps propagating to every ancestor.
        // See https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
        event.stopPropagation();
        setButtonColor('danger');
    }

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center' onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
            <p className='mb-0'>{task}</p>
            <DeleteButton taskIndex={index} color={buttonColor} onClickHandler={onClickHandler} onDeleteButtonHandler={handleOnDeleteButton}/>
        </li>
    );
};
