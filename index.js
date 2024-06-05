

function loadUsers2() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers2(data))
}

function displayUsers2(data) {
    const ul = document.getElementById('users-list');

    for (const users of data) {
        const li = document.createElement('li');
        li.innerText = users.name;
        ul.appendChild(li);
    }
}