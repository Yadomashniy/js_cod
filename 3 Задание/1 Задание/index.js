let number = 10;
console.log(Number(number), Boolean(number), String(number));

let string = "Hello";
console.log(Number(string), Boolean(string), String(string));

let boolean = true;
console.log(Number(boolean), Boolean(boolean), String(boolean));

let undefinedValue;
console.log(Number(undefinedValue), Boolean(undefinedValue), String(undefinedValue));

let nullValue = null;
console.log(Number(nullValue), Boolean(nullValue), String(nullValue));

let array = [1, 2, 3];
console.log(Number(array), Boolean(array), String(array));

let object = {key: "value"};
console.log(Number(object), Boolean(object), String(object));

let symbol = Symbol("two");
console.log(Number(Symbol), Boolean(Symbol), String(Symbol));
