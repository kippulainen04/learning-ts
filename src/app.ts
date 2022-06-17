// const names: Array<string> = ['Nio', 'Manu']; // string []
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}
// as {name: string, age: string}
// <{name: string, hobbies: string[]}, {age: number}> : TS already infers the types of the values we are passing
const mergeObj = merge({name: 'Nio', hobbies: ['sport']}, {age: 10});
const mergeObj2 = merge({name: 'Nio'}, {hah: 10});
console.log(mergeObj)
console.log(mergeObj2)

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.'
    if(element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Olala']));
console.log(countAndDescribe([]));