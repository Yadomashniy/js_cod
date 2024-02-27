function getSumOfSequence(number) {
    const sequence = [];
    for (let i = 1; i <= number; i++) {
        sequence.push(i);
    }
    
    return sequence[0] + sequence[sequence.length - 1];
}

// Пример использования
const sum = getSumOfSequence(5);
console.log(sum); // Выведет 6