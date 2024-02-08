let JavaScriptDescription = "JavaScript - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. \
Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."
const part = JavaScriptDescription.slice(0, Math.floor(JavaScriptDescription.length / 2))
const letter = part.replaceAll('а', 'А')
const space = letter.replaceAll(' ', '')
const repeat = space.repeat(3)
console.log(repeat);
console.log(repeat.slice(Math.floor(repeat.length / 2 -1), Math.floor(repeat.length / 2)))