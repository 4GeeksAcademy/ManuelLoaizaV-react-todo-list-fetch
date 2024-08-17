import React from 'react';
import { deleteTask, fetchTasks } from '../api/task';
import { deleteUser } from '../api/user';

export default function DeleteUserButton({ hidden, setTasks }) {
    async function handleOnClick() {
        const fetchedTasks = await fetchTasks();
        if (fetchedTasks !== undefined) {
            for (const fetchedTask of fetchedTasks) {
                await deleteTask(fetchedTask.id);
            }
            setTasks([]);
            console.log(`Deleting user ${process.env.USERNAME} ...`);
            await deleteUser();
        }
    }

    return (
        <button type='button' className={`btn btn-danger ${hidden}`} onClick={handleOnClick}>Clear tasks</button>
    );
};