var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// function add(num1: number, num2: number) {
//     return num1 + num2;
// }
// button.addEventListener("click", function() {
//     console.log(add(+input1.value, +input2.value))
// } )
var House = /** @class */ (function () {
    function House(doorStatus) {
        this.door = 'open';
        this.door = doorStatus;
        console.log(this.door);
    }
    return House;
}());
var house = new House('closed');
console.log(house);
