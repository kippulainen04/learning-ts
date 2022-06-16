"use strict";
const button = document.querySelector('button')!;


function add2(n1: number, n2: number) {
    if(n1 +n2 > 0){
        return n1 + n2;
    }
    return;
}

function clickHandler(message: string) {
    // let userName = 'Max';
    console.log('Clicked' + message)
}


if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'You are welcome!'));
}
