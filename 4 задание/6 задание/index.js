let userText = prompt("Введите текст");
userText = userText.trim();

let wordFromText = prompt("Введите слово из текста");
wordFromText = wordFromText.trim();

let indexOfWord = userText.indexOf(wordFromText);

let start = 0;

let obrezka = userText.slice(start, indexOfWord);

alert(`Результат: ${obrezka}`); 