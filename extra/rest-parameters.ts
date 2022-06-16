const nameUser = 'Nio';
let age = 20;

age= 29;

let result1: any;

function add3(a: number, b:number) {
    result1 = a + b;
    return result1;
}

// if(age < 29) {
//     let isOld = true;
//     }

// console.log(isOld) 

// console.log(result1)

const add4 = (a: number, b:number = 1) => {
    return a + b;
};

console.log(add4(2,5));

const printOutput1: (a: number | string) => void = output => console.log(output);


// const button1 = document.querySelector('button');
// if(button1) {
//     button1.addEventListener('click', event => console.log(event));
// }

printOutput1(add4(5))

const hobby = ['Sports', 'Cooking', 'Eating', 'Sleeping'];
const activeHobbies = ['Hiking']

activeHobbies.push(...hobby)
console.log(activeHobbies)

const person1 = {
    name1: 'Nio',
    age1: 30
}

const copiedPerson = {...person1}
console.log(copiedPerson)
 
const add5 = (...numbers: number[]) =>  {
    return numbers.reduce((acc, pre) => {
        return acc + pre;
    }, 0);
};

const addedNumbers = add5(5,10,2,3.8)
console.log(addedNumbers)

const [hobby1, hobby2, ...remainingHobbies] = hobby
console.log(hobby, hobby1, hobby2)

const {name1: firstName, age1} = person1;

console.log(firstName, age1)