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

// access a property in an object []
function extractAndCovert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value' + obj[key]
}

extractAndCovert({name: 'Max'}, 'name');

//-----Generic Classes ------ //


class DataStorage<T extends string | number | boolean> {
    // private data: (string | number | boolean)[] = []; this can have an array of strings, numbers and booleans mixed. 
    // private data: string[] | number[] | boolean[] = []; 
    private data: T[] = [];

    // addItem(item: string | number | boolean) { 
    addItem(item: T) { 
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Nio');
textStorage.addItem('Manu');
textStorage.removeItem('Manu');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Nio'}
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// //..
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    // return {title: title, description: description, completeUntil: date}
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Sports'];
// names.push('Manu')
console.log(names)