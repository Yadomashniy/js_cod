let n = 456
n = 789
console.log('n', n, typeof n)

let str = 'Ку'
console.log('str', str, typeof str)

let amiri = 233 > 123
alert (amiri)
console.log('amiri', amiri, typeof amiri)

let police = null
console.log('police', police, typeof police)

let surname
alert(surname)
console.log('surname', surname, typeof surname)

let rok = new Object()
let kor = {}
console.log('rok', rok, typeof kor)

const bigint = 1234567890123456789012345678901234567890n;
const sameBigint = BigInt("1234567890123456789012345678901234567890");
const bigintFromNumber = BigInt(10);
console.log('bigint', bigint, typeof bigint)

let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false
console.log('id1', id1, typeof id2)