function addDays(date, days = 1) {
  const timestamp = date.getTime(); 
  const millisecondsInDay = 24 * 60 * 60 * 1000; 
  const newTimestamp = timestamp + days * millisecondsInDay; 
  
  return new Date(newTimestamp);
}

const currentDate = new Date(); 
const updatedDate = addDays(currentDate, 5); 
console.log(updatedDate);