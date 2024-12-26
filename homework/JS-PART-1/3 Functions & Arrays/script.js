//----------------------------------------------------------- Task 1 -----------------------------------------------------------//


const arr1 = [1, 2, 3]
const arr2 = [4, 1, 1, 1, 4]
const arr3 = [2, 2, 2, 2, 2, 2]

function doubleArray(arr) {
    return arr.map(i => i * 2)
}

let result1 = doubleArray(arr1)
let result2 = doubleArray(arr2)
let result3 = doubleArray(arr3)

console.log(result1);
console.log(result2);
console.log(result3);



//----------------------------------------------------------- Task 2 -----------------------------------------------------------//


function changedNumbers(arr) {

    if (arr === null || arr === undefined) {
        return [];
    }

    if (arr.length === 0) {
        return [];
    }

    return arr.map(num => {
        if (num === 0) {
            return 0;
        } else {
            return -num;
        }
    });
}


const arrr1 = [1, 2, 3, 4, 5];
const arrr2 = [1, -2, 3, -4, 5];
const arrr3 = [];
const arr4 = [0];
const arr5 = null;


console.log(changedNumbers(arrr1));
console.log(changedNumbers(arrr2));
console.log(changedNumbers(arrr3));
console.log(changedNumbers(arr4));
console.log(changedNumbers(arr5));



//----------------------------------------------------------- Task 3 -----------------------------------------------------------//


function stringToNull(arr) {
    if (!Array.isArray(arr)) {
        return "Это не массив";        //--------------------------- Проверка на массив ---------------------------//
    }
    return arr.map(item => {
        if (typeof item === 'string') {
            return null;
        } else {
            return item;
        }
    });
}

const arrs1 = [4, 6, 'Ivan', 5, 'Denis '];
const arrs2 = 123;                   //--------------------------- Проверка на не массив --------------------------------// 

console.log(stringToNull(arrs1));
console.log(stringToNull(arrs2));



//----------------------------------------------------------- Task 4 -----------------------------------------------------------//


function namesLength(names) {
    if (!Array.isArray(names)) {
        return "Это не массив";       //--------------------------- Проверка на массив ---------------------------//
    }
    return names.filter(name => typeof name === 'string' && name.length <= 5);
}

const nams1 = ['Евдоким', 'Ivan', 'Игнат', 'Denis '];
const nams2 = 54321;          //--------------------------- Проверка на не массив --------------------------------// 

console.log(namesLength(nams1));
console.log(namesLength(nams2));



//----------------------------------------------------------- Task 5 -----------------------------------------------------------//


function trippleArr(arr) {
    return arr.map(i => i ** 3)
}

const numrs = [7, 8, 2]
let resultOfCubs = trippleArr(numrs)

console.log(resultOfCubs);



//----------------------------------------------------------- Task 6 -----------------------------------------------------------//


function lengthOfWords(arr) {
    return arr.map(i => i.length)
}


const arrOfWords = ['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']
const resultt = lengthOfWords(arrOfWords)

console.log(resultt);



//----------------------------------------------------------- Task 7 -----------------------------------------------------------//


function arrsToNums(arr) {

    return arr.map(number => {
        document.write(`<p>Цифры: ${number}</p>`)
    })
}

const arrOfNums = [1, 2, 3, 4, 5];
const numsOfArr = arrsToNums(arrOfNums)

