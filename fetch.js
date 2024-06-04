

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    fetch(url)
        .then(Response => Response.json())
        .then(Response => console.log(Response))

}