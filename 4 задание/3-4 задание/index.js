const userName = prompt("Как вас зовут?");
const userAge = prompt("Сколько вам лет?");
const formattedUserName = userName.trim().toLowerCase();
const formattedUserAge = Number(userAge.trim());

alert(`Вас зовут, ${formattedUserName} и вам ${formattedUserAge}`);