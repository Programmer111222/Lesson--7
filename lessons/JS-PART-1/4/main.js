let obj = {
    name: 'Uluk'
}

let h1 = document.getElementById('h1');
let tag = document.getElementsByTagName('h2')
let clas = document.getElementsByClassName('h1')

let query1 = document.querySelector('h2') // Ищет по тегу
let query2 = document.querySelector('#h2') // Ищет по id
let query3 = document.querySelector('.h2') // Ищет по class

console.log(h1);
console.log(tag[0]);
console.log(clas[1]);

console.log(clas[0].getAttribute('class'));
h1.setAttribute('class', 'changedText') // добавляет новый аттрибут
h1.removeAttribute('id')
h1.className = 'link';

h1.textContent = 'Change Text'; //меняет текст
h1.innerText = 'change'; // меняет текст и стили
h1.innerHTML = '<a class="link" href="https://web.telegram.org/a/#-1002182255710">Change</a>';
h1.style.backgroundColor = 'rgb(0, 146, 175)'
h1.style.paddingLeft = '150px';



let box = document.getElementById('box');

let p = document.createElement('p'); // создание элемента а не тэга
p.textContent = 'Create new tag p ';
box.append(p);
box.remove(p)

let btn = document.getElementById('btn')

btn.onclick = () => {
    tag[0].style.color = 'aqua';
    // tag[0].setAttribute('class', 'aqua')
    alert('The button was clicked !')
    console.log(inp.value);
    
}


// let result = [1,2,3,4,5,6].map((el) => {return el * 2})
// console.log(result);


// btn.addEventListener('mouseover', () => {
//     alert('Наведено на кнопку!')
// })


let inp = document.getElementById('inp');

inp.onchange = (event) => {
    console.log(event.target.value);   
}