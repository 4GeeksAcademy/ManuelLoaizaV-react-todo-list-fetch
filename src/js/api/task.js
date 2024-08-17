import { fetchUser } from "./user";

async function createTask(taskDescription, username = process.env.USERNAME) {
    const response = await fetch(`${process.env.API_BASE_URL}/todos/${username}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            label: taskDescription,
            is_done: false
        })
    });
    const createdTask = await response.json();
    return {
        id: createdTask.id,
        description: createdTask.label,
        isDone: createdTask.is_done
    };
}

async function fetchTasks(username = process.env.USERNAME) {
    const user = await fetchUser(username);
    
    if (user === undefined) {
        return undefined;
    }

    return user.todos.map(task => {
        return {
            id: task.id,
            description: task.label,
            isDone: task.is_done
        };
    });
}

async function updateTask(taskId, description, isDone) {
    const body = {};
    if (description !== undefined) {
        body['label'] = description;
    }
    if (isDone !== undefined) {
        body['is_done'] = isDone;
    }

    const response = await fetch(`${process.env.API_BASE_URL}/todos/${taskId}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const updatedTask = await response.json();
    return updatedTask;
}

async function deleteTask(taskId) {
    const response = await fetch(`${process.env.API_BASE_URL}/todos/${taskId}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            accept: 'application/json',
        }
    });
    if (response.status !== 204) {
        const content = await response.json();
        console.error(content.detail);
    }
} 

export { createTask, fetchTasks, updateTask, deleteTask };
