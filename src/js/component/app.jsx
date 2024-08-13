import React from 'react';
import List from './list';

export default function App() {
    return (
        <div className='container mt-4'>
            <div className='row d-flex justify-content-center'>
                <h1 className='display-2 text-center'>todo list</h1>
            </div>
            <div className='row d-flex justify-content-center'>
                <div className='col-4'>
                    <List/>
                </div>
            </div>
        </div>
    );
};