import React, { useState } from 'react';
import List from './list';
import Title from './title';
import DeleteUserButton from './delete-user.button';

export default function App() {
    const [tasks, setTasks] = useState([]);

    return (
        <div className='container my-4'>
            <div className='row d-flex justify-content-center'>
                <Title />
            </div>
            <div className='row d-flex justify-content-center'>
                <div className='col-4'>
                    <List tasks={tasks} setTasks={setTasks} />
                </div>
            </div>
            <div className='d-flex justify-content-center my-5'>
                <DeleteUserButton hidden={tasks.length === 0 ? 'd-none' : ''} setTasks={setTasks} />
            </div>
        </div>
    );
};