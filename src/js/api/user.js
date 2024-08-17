// I had to install dotenv-webpack with npm and modify webpack.config.js.
// See the following links:
// - https://prateeksurana.me/blog/using-environment-variables-with-webpack/
// - https://www.npmjs.com/package/dotenv-webpack
// - https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs

async function createUser(username = process.env.USERNAME) {
    const response = await fetch(`${process.env.API_BASE_URL}/users/${username}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const createdUser = await response.json();

    // TODO: I have manually hit the API to know this was a 201. Is there a better way to know the valid status codes?
    if (response.status === 201) {
        return createdUser;
    }

    console.error(createdUser.detail);
    return undefined;
}

async function fetchUser(username = process.env.USERNAME) {
    const response = await fetch(`${process.env.API_BASE_URL}/users/${username}`, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
    });

    const userInfo = await response.json();

    // TODO: Is there a better way to handle any 2xx status code without checking if it is within an interval?
    if (response.status === 200) {
        return userInfo;
    }

    // Prefer error over log.
    // See https://developer.mozilla.org/es/docs/Web/API/console/error_static
    console.error(userInfo.detail);
    return undefined;
}

async function deleteUser(username = process.env.USERNAME) {
    const response = await fetch(`${process.env.API_BASE_URL}/users/${username}`, {
        method: 'DELETE',
        headers: { accept: 'application/json' }
    });

    if (response.status !== 204) {
        const content = await response.json();
        console.error(content.detail);
    }
}

export { createUser,fetchUser, deleteUser };
