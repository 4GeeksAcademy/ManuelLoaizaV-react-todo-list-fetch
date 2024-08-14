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

    function generateListFooterItems() {
        const listFooterItems = [];
        for (let i = 0; i < tasks.length; i++) {
            const width = 90 + 10 * (tasks.length - 1 - i) / tasks.length;
            const listFooterItem = <li className='list-group-item shadow-lg py-0 mx-auto' style={{height: '4px', width: `${width}%`}}></li>;
            listFooterItems.push(listFooterItem);
        }
        return listFooterItems;
    }

    return (
        <ul className='list-group bg-light'>
            <li className='list-group-item shadow-lg'>
                <input type='text' className='form-control px-0 border-0 shadow-none' placeholder='Add a task ...' onKeyDown={handleKeyDown} />
            </li>
            {tasks.map((task, index) => <Task key={index} index={index} task={task} onClickHandler={handleOnClick}/>)}
            <li className='list-group-item shadow-lg'>
                <p className='text-secondary fs-6 mb-0'>{`${tasks.length} remaining task${tasks.length !== 1 ? 's' : ''}.`}</p>
            </li>
            {generateListFooterItems()}
        </ul>
    );
};
