// function calc(a, b) {
//     let sum = a + b;
//     let mult = a * b;
//     console.log(`Сумма параметров равна ${sum} Произведение равно ${mult}`);
// }

// calc(4, 5);
// calc(10, 12);



// function riddle(question, answer) {
//     let userAnswer = prompt(question);

//     if (userAnswer === answer) {
//         console.log('угадал');
//     } else {
//        console.log('не угадал'); 
//     }  
// }

// riddle(`Сидит дед во сто шуб одет, кто его раздевает тот слёзы проливает`, 'лук');
// riddle(`Зимой и летом одним цыетом`, 'ёлка');



// function sum(prepaidExpense, salary) {
//    return prepaidExpense + salary; 
// }


// function mult(day, moneyDay) {
//    return day * moneyDay; 
// }


// let month1 = sum(30, 40);
// let month2 = sum(40, 55);

// let result = month1 + month2;

// let result2 = mult(45, 3.5);

// console.log(`Всего заработал ${result1}`);

// console.log(`Зарплата по дням ${result2}`);



// let count = 0;
// let i = 1000;
// while (i > 50) {
//     i /= 2
//     count++;
// }

// console.log(count, i);

// function delMessage() {
//    let del = confirm('Вы правда хотите удалить сообщение?') ? alert('Сообщение удалено') : alert('Удаление отменено');
// }

// const mult = (a, b) => a * b;
// mult(2, 3);

// const puzzle = (a, b) => {
//     if (a > b) {
//         return a + b;
//     } else {
//         return a * b;
//     }
// }

// console.log(puzzle(2, 3));


// const user = {
//     name: 'Коля',
//     age: '36',
//     sity: 'Пенза',
//     getInfo() {
//        return(`Пользователь ${user.name}, возраст ${user.age}, проживает в городе ${user.sity}`);
//     }
//  }
 
// console.log(user.getInfo());



// function getRectangleArea() {
//     // Используем 'this' для обращения к свойствам 'width' 
//     // и 'height' текущего объекта
//     return this.width * this.height;
// }
// function getRectanglePerimeter() {
//     // Используем 'this' для обращения к свойствам 'width' 
//     // и 'height' текущего объекта
//     return this.width * 2 + this.height * 2;
// }
 
// const square3 = {
//     width: 4,
//     height: 5,
 
//     // Используем функции, объявленные выше, как методы объекта
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
// };
 
// const square4 = {
//     width: 7,
//     height: 3,
 
//     // Используем функции, объявленные выше, как методы объекта
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
// };
 
//  // Вызываем методы объектов
// console.log(square3.getArea());
// console.log(square3.getPerimeter());
// console.log(square4.getArea());
// console.log(square4.getPerimeter());