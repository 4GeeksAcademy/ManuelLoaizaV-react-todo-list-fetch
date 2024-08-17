import React, { useEffect } from 'react';
import Task from './task';
import { createTask, fetchTasks, updateTask } from '../api/task';
import { createUser } from '../api/user';

export default function List({ tasks, setTasks }) {
    useEffect(() => {
        startFetching();
    }, []);

    async function handleKeyDown(event) {
        const key = event.key;
        const newTask = event.target.value.trim();
        if (key === 'Enter' && newTask !== '') {
            event.target.value = '';
            await startFetching();
            const createdTask = await createTask(newTask);
            setTasks([...tasks, createdTask]);
        }
    }

    async function handleOnClick(taskId) {
        await updateTask(taskId, undefined, true);
        await startFetching();
    }

    async function startFetching() {
        const fetchedTasks = await fetchTasks();
        if (fetchedTasks === undefined) {
            console.log(`Creating user ${process.env.USERNAME} ...`);
            await createUser();
            setTasks([]);
        } else {
            setTasks(fetchedTasks.filter(task => !task.isDone));
        }
    }

    return (
        <ul className='list-group bg-light'>
            <li className='list-group-item shadow-lg'>
                <input type='text' className='form-control px-0 border-0 shadow-none' placeholder='Add a task ...' onKeyDown={handleKeyDown} />
            </li>
            {tasks.map((task, index) => <Task key={index} task={task} onClickHandler={handleOnClick}/>)}
            <li className='list-group-item shadow-lg'>
                <p className='text-secondary fs-6 mb-0'>{`${tasks.length} remaining task${tasks.length !== 1 ? 's' : ''}.`}</p>
            </li>
            {tasks.map((_, index) => <li key={index} className='list-group-item shadow-lg py-0 mx-auto' style={{height: '4px', width: `${90 + 10 * (tasks.length - 1 - index) / tasks.length}%`}}></li>)}
        </ul>
    );
};
