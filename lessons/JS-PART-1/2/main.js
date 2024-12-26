let i = 1;

// while (i < 5) {
//     document.write(`<div class="card">
//             <img src="https://upload.wikimedia.org/wikipedia/en/e/ee/Front_%26_Back_Face_of_iPhone_16_Pro_Max.png" alt="">
//             <h1>${i * 900}$</h1>
//             <p>Iphone X</p>
//         </div>`)
//     i++;
// i = i + 1;
// i += 1 ;
// }

// do {
// console.log('Hello');
// i++
// } while (i < 3);


// let prom = prompt('Введите число')


// if(prom == 0 || prom < 0) {
//     alert('Число должно быть больше нуля')
// }else{
//     for (let j = 1; j <=prom; j++){
//         console.log('This is for', j);
//     }
// }   


let mas = Array();
let mas1 = [12, 'hello', true, [2, 3, 4]]

// console.log(mas1);
// console.log(mas1[2]);
// console.log(mas1[0]);


for (let item in mas1) {
    // console.log(item);   
    // console.log(mas1[item]);
}

let photo = ['https://twigo.ru/center/iblock/85c/30059041bb2_2.jpg',
    'https://avatars.mds.yandex.net/i?id=9003dc74193cd5c28f7f4ccd9b522e39_l-4322178-images-thumbs&n=13',
    'https://i-ekb.ru/store/wa-data/public/shop/products/06/26/2606/images/22162/22162.700.jpg',
    'https://avatars.mds.yandex.net/i?id=79c99b002ce56f2dbce143c6e1f67a3c_l-5877064-images-thumbs&n=13'
]

// for (card in photo) {
//     document.write(`<div class="card">
//              <img src="${photo[card]}" alt="photos">
//              <h1>900$</h1>
//              <p>Iphone X</p>
//          </div>`)
// }

let obj1 = Object();

let obj = {
    name: 'Beka',
    age: 25,
    surname: 'Islam', 
    work: {
        nameCompany: 'SIT',
        location: 'Osh',
    }

}

// console.log(obj);
// console.log(obj['name']);
// console.log(obj.name);

let man = {
    name: 'John',
    age: '29',
    surname: 'Johnson',
    work: {
        nameOfTheCompany: 'BBC',
        location: 'New York',
    },
}

// console.log(`Name: ${man.name} \nAge: ${man.age} \nSurname: ${man.surname} \nWork: ${man.work.nameOfTheCompany} \nWork: ${man.work.location}`);

let prod = [
    {
        img: 'https://twigo.ru/center/iblock/85c/30059041bb2_2.jpg',
        price: '900$',
        title:'Iphone 10',
        description: 'The best phone ever',
    },
    {
        img: 'https://i-ekb.ru/store/wa-data/public/shop/products/06/26/2606/images/22162/22162.700.jpg',
        price: '1100$',
        title:'Iphone 11',
        description: 'The best phone ever',
    },
    {
        img: 'https://avatars.mds.yandex.net/i?id=9003dc74193cd5c28f7f4ccd9b522e39_l-4322178-images-thumbs&n=13',
        price: '1400$',
        title:'Iphone 12',
        description: 'The best phone ever',
    },
    {
        img: 'https://avatars.mds.yandex.net/i?id=79c99b002ce56f2dbce143c6e1f67a3c_l-5877064-images-thumbs&n=13',
        price: '1600$',
        title:'Iphone 13',
        description: 'The best phone ever',
    }
]


for(card in prod) {
    document.write(`<div class="card">
        <img src="${prod[card].img}" alt="photos">
        <h1>${prod[card].title}</h1>
        <p>${prod[card].price}</p>
        <p>${prod[card].description}</p>
    </div>`)
}