let userString = prompt("Введите текст для обрезки");

userString = userString.trim();

let startSliceIndex = parseInt(
  prompt("Введите индекс, с которого нужно начать обрезку строки"),
  10
);
let endSliceIndex = parseInt(
  prompt("Введите индекс, которым нужно закончить обрезку строки"),
  10
);

let slicedString = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${slicedString}`);