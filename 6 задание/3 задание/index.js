function getDivisorsCount(number = 1) {
    if (number < 0 || !Number.isInteger(number)) {
      alert("number должен быть целым числом и больше нуля!");
      return;
    }
  
    let count = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        count++;
      }
    }
    return count;
  }
  
  console.log(getDivisorsCount(10)); // Возвращает 4
  console.log(getDivisorsCount(13)); // Возвращает 2
  console.log(getDivisorsCount(-5)); // Выводит alert "number должен быть целым числом и больше нуля!"
  console.log(getDivisorsCount(3.5)); // Выводит alert "number должен быть целым числом и больше нуля!"
  console.log(getDivisorsCount()); // Возвращает 1