//---------------------------------------переменнные и типы данных---------------------------------------

var num = 0;
var str = 'String.2=-';
var bol = true
var und = undefined;
var nul = null;

let num1 = 10;
const con = 20;

num1 = 40;

// console.log(num1);


//--------------------------------------Вывод данных--------------------------------------

// console.log(num1);
document.write(num1);
// alert(num1);

//--------------------------------------Математические операции--------------------------------------

// console.log(5 + 5);
// console.log(5 - 5);
// console.log(5 / 5);
// console.log(5 * 5);
// console.log(5 ** 5);
// console.log(5 % 5);
// console.log('Hello ' + 'World!');
// console.log('1' + 3);
// console.log('1' + String(3));
// console.log((+'2') - 1);     //-------------------------------------- Преобразование типов данных--------------------------------------
// console.log(Number('45'));


//-------------------------------------- Преобразование значения на его тип данных --------------------------------------

// console.log(typeof 12);
// console.log(typeof '12');


//-------------------------------------- Операторы сравнения --------------------------------------

// console.log(5 < 4); // false
// console.log(5 <= 4); // false 
// console.log(5 > 4); // true
// console.log(5 >= 4); // true 
// console.log(5 == '5'); // false
// console.log(5 === '5'); // false 
// console.log(5 != 4); // true
// console.log(5 !== 4); // true


// console.log('Груша' < 'Гиноград'); // false 
// console.log('Груша' >'Гиноград'); // true
// console.log('Груша' == 'Гиноград'); // false


//-------------------------------------- Тернарные условия %% - and, || - or --------------------------------------

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(true || true); // true
// console.log(false || false); // false

//-------------------------------------- Условные конструкции --------------------------------------

// if(5 < 1) {
//     console.log('5 больше');
//     if(10 < 50) {
//         console.log('10 меньше');
//     }
// }else if(10 > 9){
//     console.log('10 меньше');   
// }else{
//     console.log('10 больше');
// }

//-------------------------------------- Тернарные условия--------------------------------------

// if(5 < 10){
//     console.log('asc');
// }else{
//     console.log('151');
// }

// 5 < 10
// ? console.log('asc')
// : console.log('151');

//: - else, ? - if

// 5 < 10 
//     ? console.log('asc')
//     : 10 > 5
//     ? console.log(151)
//     : console.log(102);

// -------------------------------------- или же возможен такой вариант написания кода --------------------------------------

// 5 < 10 ? console.log('asc') : 10 > 5 ? console.log(151) : console.log(102);


// switch (true) {
//     case 5 < 10:
//         console.log('5 меньше');
//         break;
//     case 5 > 10:
//         console.log('5 больше');
//         break;
//     default:
//         console.log('5 равно');
//         break;
// }

let age = prompt('Укажите возраст');

// if (age < 18) {
//     console.log('Молодой');
// } else if (age >= 18 && age < 45) {
//     console.log('Зрелый');
// } else if (age > 45) {
//     console.log('Пожилой');
// }else{
//     console.log('Укажите возрваст');
// }

switch (true) {
    case age < 18:
        console.log('Молодой');
        break;
    case age < 45:
        console.log('Зрелый');
        break;
    default:
        console.log('Пожилой');
        break;
}

// age < 18 ? console.log('Молодой') : age > 18 && age < 45 ? console.log('Зрелый') : age > 45 ? console.log('Пожилой') : console.log('Укажите возрваст');








