document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');
    const searchUser = document.getElementById('searchUser');

    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(userForm);
        const user = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        };
        const response = await axios.post('/api/users', user);
        addUserToList(response.data);
        userForm.reset();
    });

    searchUser.addEventListener('input', () => {
        const query = searchUser.value.toLowerCase();
        const users = userList.getElementsByTagName('div');
        Array.from(users).forEach(user => {
            const username = user.querySelector('.username').textContent.toLowerCase();
            user.style.display = username.includes(query) ? '' : 'none';
        });
    });

    function addUserToList(user) {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        userItem.innerHTML = `
            <span class="username">${user.username}</span>, Email: ${user.email}
            <button class="btn btn-sm btn-warning" onclick="editUser('${user._id}')">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteUser('${user._id}')">Delete</button>
        `;
        userList.appendChild(userItem);
    }

    async function editUser(id) {
        // Fetch user data and populate form for editing
        const response = await axios.get(`/api/users/${id}`);
        const user = response.data;
        document.getElementById('username').value = user.username;
        document.getElementById('email').value = user.email;
        // Implement the logic to save changes after editing
    }

    async function deleteUser(id) {
        await axios.delete(`/api/users/${id}`);
        // Remove user from the UI
        const userItem = document.querySelector(`button[onclick="deleteUser('${id}')"]`).parentElement;
        userList.removeChild(userItem);
    }
});
