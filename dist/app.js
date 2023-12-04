"use strict";
var _a;
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
const user = {
    name: 'Alex',
    additionInfo: {
        someInfo: 'adwda'
    }
};
console.log((_a = user === null || user === void 0 ? void 0 : user.additionInfo) === null || _a === void 0 ? void 0 : _a.someInfo);
//# sourceMappingURL=app.js.map