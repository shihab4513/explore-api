
function loadComments() {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
        .then(res => res.json())
        .then(data => displayComments(data))
        .catch(error => console.error('error happened ', error));//if any error happen catch will catch that and print it in console
}

function displayComments(data) {

    for (const comment of data) {
        console.log(comment);
    }
}
/*
above and below code basically do the same thing. loadComments() and loadComments2() function do basically same thing
*/

const loadComments2 = async () => {


    try {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        const res = await fetch(url)
        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.error('data load error');
    }

}