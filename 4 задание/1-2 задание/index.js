const myName = "Никита";
let programmingLanguage = "sKRIPTA";
let beforeprogrammingLanguage = "REIT";

const courseCreatorName = "Никиты Михайловича";
let reasonText = "Это увлекательная и творческая профессия";
let numberOfMonth = "8";

programmingLanguage.toUpperCase();

const result = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования \
 ${programmingLanguage} на курсе по программированию ${programmingLanguage} ${courseCreatorName}. \ 
 Я хочу стать веб-разработчиком потому что ${reasonText}. До этого я изучал ${beforeprogrammingLanguage} \
 ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;
console.log(result);






let myInfoText = result;

console.log(
  result.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
);
console.log(myInfoText.length);

console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length - 1]);