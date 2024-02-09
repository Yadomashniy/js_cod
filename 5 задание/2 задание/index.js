let rot = prompt('Сколько будет 2+2?');
let rot2 = prompt('Сколько будет 2*2?');
let rot3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу.Сколько яблок у Пети осталось?');
let rot4 = prompt('У Маши было 10 конфет.2 она съела, 1 отдала другу. После мама дала Маше ещё 5 конфет.Сколько в итоге конфет осталось у Маши?')
let rot5 = prompt('Сколько будет 2+2*2?')

Number(rot);
Number(rot2);
Number(rot3);
Number(rot4);
Number(rot5);

const rrot = 4;
const rrot2 = 4;
const rrot3 = 1;
const rrot4 = 12;
const rrot5 = 6;

let CorrectAnswer = 0;
let inCorrectAnswer = 0;

if (rot == rrot){
    CorrectAnswer = CorrectAnswer+1;
}
else{
    inCorrectAnswer = inCorrectAnswer+1;
}

if (rot2 == rrot2){
    CorrectAnswer = CorrectAnswer+1;
}
else{
    inCorrectAnswer = inCorrectAnswer+1;
}

if (rot3 == rrot3){
    CorrectAnswer = CorrectAnswer+1;
}
else{
    inCorrectAnswer = inCorrectAnswer+1;
}

if (rot4 == rrot4){
    CorrectAnswer = CorrectAnswer+1;
}
else{
    inCorrectAnswer = inCorrectAnswer+1;
}

if (rot5 == rrot5){
    CorrectAnswer = CorrectAnswer+1;
}
else{
    inCorrectAnswer = inCorrectAnswer+1;
}

alert (`Конец теста! Правильные ответы - ${CorrectAnswer}; Неправильные ответы - ${inCorrectAnswer}.`);