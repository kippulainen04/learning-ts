type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};


type ElevatedEmployee = Admin & Employee;

const e1:ElevatedEmployee = {
    name: 'Nio',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric

function add(a: number, b:number): number;
function add(a: string, b:string): string;
function add(a: number, b:string): string;
function add(a: string, b:number): string;
function add(a: Combinable, b:Combinable) {
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Nio', 'Phan');
result.split(' ')

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My Own Company'}
};

console.log(fetchedUserData?.job?.title)

const userInput = '';
// we get 2nd value if userInput is falsy value = null or undefined
const storedData = userInput ?? 'DEFAULT';

console.log(storedData)

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name)
//     if('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges)
//     }
//     if('startDate' in emp) {
//         console.log('Start Date: ' + emp.startDate)
//     }
// }

// printEmployeeInformation(e1);
// printEmployeeInformation({name: 'Manu', startDate: new Date()});

// class Car {
//     drive() {
//         console.log('Driving...')
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...')
//     }

//     loadCargo(amount: number) {
//         console.log('Loading cargo ...' + amount)
//     }
// }

// type Vehicle = Car | Truck

// // constructor functions
// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     // if(vehicle instanceof Truck)
//     if('loadCargo' in vehicle) {
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1)
// useVehicle(v2)

// // type: 'bird' is a luteral type, hold a string must be bird, so we narrow down the value that maybe be stored in type 
// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch(animal.type){
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;

//     }
//     console.log('Moving with speed: ' +  speed)
// }

// moveAnimal({type: 'bird', flyingSpeed: 10})

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input');

// if(userInputElement) {
//     (userInputElement as HTMLInputElement).value= 'Hi there!'
// }
// // we create objects where we have some error identifier, which could be the idea of the input field to which the error belongs
// interface ErrorContainer { // {email: 'Not a valid email', username: 'Must start with a character'}
//     // id: string;
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with a capital character!'
// };


// //------//
// interface Admins {
//     name: string;
//     privileges: string[];
// };

// interface Employees {
//     name: string;
//     startDate: Date;
// };


// interface ElevatedEmployees extends Admin, Employee {}

// const e2:ElevatedEmployees = {
//     name: 'Nio',
//     privileges: ['create-server'],
//     startDate: new Date()
// }