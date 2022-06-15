let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Nio';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(m: string, code: number): never {
    throw {message: m, errorCode: code};
    // while(true) {} infinitive loop
}

const result = generateError('An error occurred!', 500);
console.log(result)
