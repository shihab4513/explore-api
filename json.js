const user = {
    id: 1,
    name: 'Shihab Uddin',
    job: 'developer'
}

// JavaScript Object Notation (JSON)

// stringify converts javaScript value to JSON string
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);
/*

{ id: 1, name: 'Shihab Uddin', job: 'developer' }
{"id":1,"name":"Shihab Uddin","job":"developer"}
here in above output we see stringify make name and value of a object into string we can see how property id become "id"
*/