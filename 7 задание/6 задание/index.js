const numbers = [10, 4, 100, -5, 54, 2];

//  Через цикл for
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum1 += Math.pow(numbers[i], 3);
}

//  Через цикл for of
let sum2 = 0;
for (const number of numbers) {
    sum2 += Math.pow(number, 3);
}

//  Через метод forEach
let sum3 = 0;
numbers.forEach(number => {
    sum3 += Math.pow(number, 3);
});

//  Через метод reduce
const sum4 = numbers.reduce((acc, number) => acc + Math.pow(number, 3), 0);

console.log("Сумма кубов чисел через цикл for:", sum1);
console.log("Сумма кубов чисел через цикл for of:", sum2);
console.log("Сумма кубов чисел через метод forEach:", sum3);
console.log("Сумма кубов чисел через метод reduce:", sum4);