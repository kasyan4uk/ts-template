const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//     return num1 + num2;
// }

// button.addEventListener("click", function() {
//     console.log(add(+input1.value, +input2.value))
// } )

class House {
    door: 'open' | 'closed' = 'open';

    constructor (doorStatus: 'open' | 'closed') {
        this.door = doorStatus;
        console.log(this.door)
    }
}

const house = new House('closed');

console.log(house);

