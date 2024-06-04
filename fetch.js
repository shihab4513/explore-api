

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    fetch(url)//get the data from url
        .then(Response => Response.json()) //convert the data to javaScript object
        .then(Response => console.log(Response))  //Display the javaScript object

}