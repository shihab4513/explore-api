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
console.log('*****************************************************************************************');
const shop = {
    owner: 'alia',
    address: {
        street: 'Community Center',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard', 'mouse'],
    revenue: 45000,
    isOpen: true,
    isNew: false

}
console.log(shop);
// we can make an object string using JSON below an example is given
const shopJson = JSON.stringify(shop);
console.log(shopJson);
// we also can convert that string into object. Below an example is given
const shopObj = JSON.parse(shopJson);
console.log(shopObj);

// We can do above process in array as well 




/*
basically here we learned how to convert an array or object into string using JSON.stringify() and convert that string into object as well using JSON.parse()

*/




