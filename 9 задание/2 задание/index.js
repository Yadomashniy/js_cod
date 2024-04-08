function getDaysBeforeBirthday(nextBirthdayDate) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  nextBirthdayDate.setFullYear(currentYear);
  
  if (nextBirthdayDate < currentDate) {
    nextBirthdayDate.setFullYear(currentYear + 1);
  }
  
  const diffTime = nextBirthdayDate.getTime() - currentDate.getTime();
  
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

const nextBirthdayDate = new Date('2023-05-20');
const daysBeforeBirthday = getDaysBeforeBirthday(nextBirthdayDate);
console.log(daysBeforeBirthday);