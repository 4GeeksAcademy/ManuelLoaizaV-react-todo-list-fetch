import React, { useState } from 'react';
import Task from './task';

export default function List() {
    const [tasks, setTasks] = useState([]);

    function handleKeyDown(event) {
        const key = event.key;
        const newTask = event.target.value.trim();
        if (key === 'Enter' && newTask !== '') {
            setTasks([...tasks, newTask]);
            event.target.value = '';
        }
    }

    function handleOnClick(deletedTaskIndex) {
        setTasks([...tasks.filter((task, index) => index !== deletedTaskIndex)]);
    }

    return (
        <ul className='list-group shadow-lg'>
            <li className='list-group-item'>
                <input type='text' className='form-control border-0 shadow-none' placeholder='Add a task ...' onKeyDown={handleKeyDown} />
            </li>
            {tasks.map((task, index) => <Task key={index} index={index} task={task} onClickHandler={handleOnClick}/>)}
            <li className='list-group-item'>
                <p className='text-secondary fs-6 mb-0'>{`${tasks.length} remaining task${tasks.length !== 1 ? 's' : ''}.`}</p>
            </li>
        </ul>
    );
};
