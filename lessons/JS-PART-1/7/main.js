var a = 10;

{
    var b = 20;
    let m = 20;
    const com = 60;
    // console.log(m);   
}

let m = 50;
// console.log(b);
// console.log(m);
// console.log(com);


var fun = function(){
    console.log(5 - 2);
}

var fun = 10;

// console.log(fun);

const foo = function(){
    console.log(5 - 3);
}

// foo = 50; 

// console.log(foo);



// declaration 
fros(); // works

function fros() {
    // console.log('fros');   
}


// expression
// fron() // error

const fron = function() {
    // console.log('fron');
}

fron()

const arrow = (a = 'Nothing', b = 0) => {
    // console.log('arrow', a, b);
}

arrow();
arrow(20, 60);

// Operator  Spread //

let mas = [1, 2, 3, 4];

console.log([...mas, 30, 50, 90]);

let obj = {name: "Askar", age: 20}

obj ={...obj, lern: "OshSU"}

console.log(obj);

let masOb = [{name: 'Dina'}, {name: 'Roma'}]

masOb = [...masOb, {name: 'Peri'}];

console.log(masOb);



// rest не находит подходящее хранилище поэтому закладывает в массив  //

const fool = (b, c, ...a) => {
    console.log('Massive', a, b, c);
}

fool(1, 2, 3, 4, 5);


// Деструктуризация массивов и объектов // 

let mas1 = [1, 2, 3, 4]

for(item in mas1){
    console.log(item);
    console.log(mas1[item]);   
}

let [num1, num2, num3, num4] = mas1

console.log(num1);
console.log(num2);

 
let obj1 = {name: "Aktan", age: 10, surname: "Nuraliev"}

let {name: name1, age: age1, surname: surname1,} = obj1;

console.log(name1);
console.log(age1);


let man = 'Hello'
let numb = 20;

console.log(man + ' World' + ' ' + numb);

console.log(`${man} World ${numb}`);


