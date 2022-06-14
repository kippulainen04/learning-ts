// const person: {
//     name: string;
//     age: number;
// } = {
    const person = {
    name: 'Nio phan',
    age: 30,
    hobbies : ['Sport', 'Cooking']
}

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

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

