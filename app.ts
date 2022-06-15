const person: {
      name: string;
      age: number;
      hobbies: string[];
      role: [number, string]
    } = {
    name: 'Nio phan',
    age: 30,
    hobbies : ['Sport', 'Cooking'],
    role: [2, 'author'],
}
// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

////////----------/////////

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 1, AUTHOR = 'AUTHOR' };

const personA = {
  name: 'Nio phan',
  age: 30,
  hobbies : ['Sport', 'Cooking'],
  role: Role.ADMIN
}

if (personA.role === Role.AUTHOR) {
  console.log('is author')
}

////////----------/////////


const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
  } = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }

