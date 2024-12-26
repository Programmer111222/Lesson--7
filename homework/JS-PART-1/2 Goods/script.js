//----------------------------------------------------------------------Task 1-------------------------------------------------------------//


const goods = [
    { name: 'Samsung S23 Ultra', price: 1100, category: 'Phones'},
    { name: 'Gold Chain', price: 900, category: 'Jewelry'},
    { name: 'Leather Coat', price: 850, category: 'Clothing'},
    { name: 'Book Martin Luther King', price: 50, category: 'Books'},
    { name: 'Aksona sofa', price: 150, category: 'Furniture'},
]

let counter = 0;

document.write("<h1>Все товары:</h1>");
for (let i = 0; i < goods.length; i++) {
  document.write(`<p>Название: ${goods[i].name}, <br> Цена: ${goods[i].price} руб., <br> Категория: ${goods[i].category}</p>`);
  counter += goods[i].price;
}

document.write(`<p>Общая сумма: ${counter} руб.</p>`);


//----------------------------------------------------------------------Task 2-------------------------------------------------------------//


const category = prompt("Введите категорию товаров:");

if (category) {
  document.write("<h1>Товары категории '" + category + "':</h1>");
  let found = false;

  for (let i = 0; i < goods.length; i++) {
    if (goods[i].category.toLowerCase() === category.toLowerCase()) {
      document.write(`<p>Название: ${goods[i].name}, <br> Цена: ${goods[i].price} руб.</p>`);
      found = true;
    }
  }

  if (!found) {
    document.write("<p>Товаров с такой категорией нет. Попробуйте ещё раз, возможно у вас получится, а возможно и нет ;)</p> <h1>Шучу все получится</h1>");
  }
}


