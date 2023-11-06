const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener("click", function() {
    console.log(add(+input1.value, +input2.value))
} )

//-----------------------------------------------------------------------------------------------------//
let age: number;
age = 50;

let names: string;
names = 'Max';

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback = (a: number) => { return 100 + a };

console.log(callback(5))


let anything: any;
anything = -20;
anything = 'Text';
anything = {};


let some: unknown ;
some = 'Text';

let str: string;

if(typeof some === "string") {
    str = some
    console.log(str)
} else {
    console.log(some, 'not string')
}
