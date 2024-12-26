//-----------------------------------------------------------1.Функции declaration
function math() {
    console.log('Hello function');
}
math();//-----------------------------------------------------------вызываем функцию   

let num = 10
console.log(num);

//-----------------------------------------------------------2.Функции expression
const text = function () {
    console.log('Its expression func');
}
text();//-----------------------------------------------------------вызываем функцию

//-----------------------------------------------------------3.Стрелочная функция
const arrow = () => {
    console.log('Its arrow function');
}
arrow();//-----------------------------------------------------------функцию вызываем

//-----------------------------------------------------------пример:
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);

num1 = 50;
num1 = 40;
console.log(num1 + num2);

num1 = 600;
num1 = 400;
console.log(num1 + num2);

//-----------------------------------------------------------а это более облеченный вариант:
const mathSum = (num1, num2) => {
    console.log(num1 + num2);
}
mathSum(10, 20);
mathSum(50, 40);
mathSum(600, 400);

//-----------------------------------------------------------Вычислите из 3 числа среднее значение 1,2,3 = 2, (A + B + C) / 3;
//-----------------------------------------------------------выведите false если число не четное,а иначе true

// const Muh = (a, b, c) => {
//     console.log('Hello function', (a + b + c) / 3);
// }
// Muh(1, 2, 3);

const average = (num) => {
    //------------------------------------------------------------------------1 способ
    console.log(num % 2 == 0 ? true : false);
    //------------------------------------------------------------------------2 способ
    if (num % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }

}
average(5);

const val = (a, b, c) => {
    return('Its return', (a + b + c) / 3);
}

console.log(val(1, 2, 3));
document.write(val(1, 2, 3));


const prim = () => {
    return 'Its return'
}

console.log(prim());
document.write(prim());


// Callback function 

const col = (callback) => {
    return callback() / 3
}

console.log(col(() => {return 1 + 2 + 3}));

const anom = (a) => {
    let funcNum1 = 10
    console.log(funcNum1, num1);
    return (b) => {
        return a + b
    }
    
}


// console.log(funcNum1); // переменная будет работать толко внутри функции 

