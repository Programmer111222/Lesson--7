//----------------------------------------------------------------------Task 1 start-------------------------------------------------------------//


let weight = prompt('Укажите свой вес')
let height = prompt('Укажите свой рост(в метрах, через запятую)')

const formuleOfIndex = weight / (height * height)
    
if(formuleOfIndex < 18.5) {
    console.log('Недостаточный вес');   
}else if(formuleOfIndex >= 18.5 && formuleOfIndex <= 24.9) {
    console.log('Нормальный вес');
}else if(formuleOfIndex >= 25 && formuleOfIndex <= 29.9) {
    console.log('Избыточный вес');   
}else if(formuleOfIndex >= 30) {
    console.log('Ожирение');   
}else {
    console.log('Вы не правильно ввели данные');
}


//----------------------------------------------------------------------Task 1 end-------------------------------------------------------------//
