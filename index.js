var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//-----------------------------------------------------------------------------------------------------//
var age;
age = 50;
var names;
names = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback = function (a) { return 100 + a; };
console.log(callback(5));
var anything;
anything = -20;
anything = 'Text';
anything = {};
var some;
some = 5;
var str;
if (typeof some === "string") {
    str = some;
    console.log(str);
}
else {
    console.log(some, 'not string');
}
