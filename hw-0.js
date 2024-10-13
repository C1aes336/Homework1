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



// let numbers = [1,2,3,5];
// console.log(numbers);
// numbers[3] = 4;
// numbers[4] = 5;
// console.log(numbers);
// const userName = ['Alex', 'Dima', 'Vlad'];
// console.log(userName);
// userName[userName.length] = 'John';
// console.log(userName);



// const numbs = [2, 4, 5, 6, 8];
// numbs.forEach((el) => {
//     console.log(el);
// });

// numbs.forEach((el, index) => {
//     console.log(`${index}: ${el}`);
// });

// numbs.forEach((el, index, arr) => {
//    console.log(`${index}: ${el}, массив: ${arr}`);
// });

// for (let i = 0; i < numbs.length; i++) {
//     if (numbs[i] == 5) break;
//     console.log(numbs[i]);
// }



// let catalog = [
//     ['Столы', 'Дорогой стол', 'Большой стол'],
//     ['Диваны', 'Красный диван', 'Белый диван']
//  ]

//  for (let item of catalog) {
//     for (let i = 0; i < item.length; i++) {
//        if (i === 0) {
//           console.log(`Категория ${item[i]}`);
//        } else {
//           console.log(`\t ${item[i]}`);
//        }
//     }
//  }


// const numbs = [2, 4, 5, 6, 8];

// for (let index = 0; index < numbs.length; index++) {
//     console.log(numbs[index]); 
// }

// numbs.forEach((el) => {
//     console.log(el);
// });

// numbs.forEach((el, index) => {
//     console.log(`${index}: ${el}`);
// });

// numbs.forEach((el, index, arr) => {
//     console.log(`${index}: ${el}, массив: ${arr}`);
// });

// for (let index = 0; index < numbs.length; index++) {
//     if (numbs[index] == 5) break;
//     console.log(numbs[index]);
// }



// let text = "Привет=как=дела";

// let splitText = text.split('=');
// console.log(splitText);

// splitText.sort();
// console.log(splitText);

// let joinedText = splitText.join(" ");
// console.log(splitText);

// let combinedText = text.split("=").sort().join(" ");
// console.log(combinedText);



// let arrSum = [3, 4];

// const sum = (a, b) => {
//     let result = a + b;
//     return result;
// }
// console.log(sum(...arrSum));



// let arrMax = [1, 2, 3, 4, 5];
// let max = Math.max(...arrMax);

// console.log(max);



// function funcSum(...arrSum) {
//     let sum = 0;
//     for (let item of arrSum) {
//         sum += item;
//     }
//     return sum;
// }
// console.log(funcSum(3, 5, 7));



// let arrSum = [3, 4, 5, 6];

// const sum = (a, b) => {
//     let result = a + b;
//     return result;
// }
// console.log(sum(...arrSum));


// let arrSum = [3, 4, 5, 6];

// const sum = (a, b, ...rest) => {
//     let result = a + b;
//     console.log(result);
//     console.log(rest);
// }
// sum(...arrSum);