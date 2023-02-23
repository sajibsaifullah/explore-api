const user = { id: 1, name: 'Gorib Aamir', job: 'actor' };
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/* 
{ id: 1, name: 'Gorib Aamir', job: 'actor' } <----- JS
{"id":1,"name":"Gorib Aamir","job":"actor"} <------ JSON
==> except boolean & number value, all types of elements converts string data.
*/


const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);

/* 
=> convert object to string ----> use JSON.stringify
=> convert string to object ----> use JSON.parse
=> JSON placeholder website for practice
===========>https://jsonplaceholder.typicode.com/
*/