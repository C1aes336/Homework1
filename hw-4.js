// // Игра для сайта («Угадай число») - Моё решение


// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function startGame() {  
// const randomInt = getRandomInt(0,100);
// console.log(randomInt)


//   for (let Answer = 1; Answer < 6  ; Answer++) {
//   let userAnswer = prompt(`Угадай число от 1 до 100.     У вас 5 попыток`);

//     if (isNaN(userAnswer)) {
//       alert(`Введено не число`);
//     } 
    
  
//     if (userAnswer < randomInt) {
//       alert(`Попытка ${Answer}    Вы ввели число меньше!`);
//     }
//     if (userAnswer > randomInt) {
//       alert(`Попытка ${Answer}    Вы ввели число больше!`);
//     } 

//     if (userAnswer == randomInt) {
//       alert(Угадал); 
//       return;
//     } else if (randomInt > 1 && randomInt < 5) {
//       alert ('это число от 1 до 5');
//     } else if (randomInt > 1 && randomInt < 10) {
//       alert ('это число от 1 до 10');
//     } else if (randomInt > 10 && randomInt < 15) {
//       alert ('это число от 10 до 15');  
//     } else if (randomInt > 10 && randomInt < 20) {
//       alert ('это число от 10 до 20');
//     } else if (randomInt > 20 && randomInt < 25) {
//       alert ('это число от 20 до 25');
//     } else if (randomInt > 20 && randomInt < 30) {
//       alert ('это число от 20 до 30'); 
//     } else if (randomInt > 30 && randomInt < 35) {
//       alert ('это число от 30 до 35'); 
//     } else if (randomInt > 30 && randomInt < 40) {
//       alert ('это число от 30 до 40'); 
//     } else if (randomInt > 40 && randomInt < 45) {
//       alert ('это число от 40 до 45');
//     } else if (randomInt > 40 && randomInt < 50) {
//       alert ('это число от 40 до 50'); 
//     } else if (randomInt > 50 && randomInt < 55) {
//       alert ('это число от 50 до 55'); 
//     } else if (randomInt > 50 && randomInt < 60) {
//       alert ('это число от 50 до 60');  
//     } else if (randomInt > 60 && randomInt < 65) {
//       alert ('это число от 10 до 20');
//     } else if (randomInt > 60 && randomInt < 70) {
//       alert ('это число от 60 до 70'); 
//     } else if (randomInt > 70 && randomInt < 75) {
//       alert ('это число от 70 до 75');
//     } else if (randomInt > 70 && randomInt < 80) {
//       alert ('это число от 70 до 80'); 
//     } else if (randomInt > 80 && randomInt < 85) {
//       alert ('это число от 80 до 85'); 
//     } else if (randomInt > 80 && randomInt < 90) {
//       alert ('это число от 80 до 90'); 
//     } else if (randomInt > 10 && randomInt < 20) {
//       alert ('это число от 90 до 95'); 
//     } else if (randomInt > 90 && randomInt < 100) {
//       alert ('это число от 90 до 100'); 
//     }     
//   }  
// }


// // Игра для сайта («Угадай число») - решение с наставником

// const start = () => {
//   let count = 5;
//   const randomInt =  Math.round(Math.random() * 100) + 1;

//   const  startGame = () => {  
//     console.log(randomInt)
    
//     let userAnswer = Number(prompt(`Угадай число от 1 до 100.     У вас ${count} попыток`));
  
//     if (isNaN(userAnswer)) {
//       alert(`Введено не число`);
//     }
  
//     if (userAnswer === randomInt) {
//       alert(`Угадал`); 
//       count = 5;
//       return;
//     } else if (randomInt > 1 && randomInt < 5) {
//       alert ('это число от 1 до 5');
//     } else if (randomInt > 1 && randomInt < 10) {
//       alert ('это число от 1 до 10');
//     } else if (randomInt > 10 && randomInt < 15) {
//       alert ('это число от 10 до 15');  
//     } else if (randomInt > 10 && randomInt < 20) {
//       alert ('это число от 10 до 20');
//     } else if (randomInt > 20 && randomInt < 25) {
//       alert ('это число от 20 до 25');
//     } else if (randomInt > 20 && randomInt < 30) {
//       alert ('это число от 20 до 30'); 
//     } else if (randomInt > 30 && randomInt < 35) {
//       alert ('это число от 30 до 35'); 
//     } else if (randomInt > 30 && randomInt < 40) {
//       alert ('это число от 30 до 40'); 
//     } else if (randomInt > 40 && randomInt < 45) {
//       alert ('это число от 40 до 45');
//     } else if (randomInt > 40 && randomInt < 50) {
//       alert ('это число от 40 до 50'); 
//     } else if (randomInt > 50 && randomInt < 55) {
//       alert ('это число от 50 до 55'); 
//     } else if (randomInt > 50 && randomInt < 60) {
//       alert ('это число от 50 до 60');  
//     } else if (randomInt > 60 && randomInt < 65) {
//       alert ('это число от 10 до 20');
//     } else if (randomInt > 60 && randomInt < 70) {
//       alert ('это число от 60 до 70'); 
//     } else if (randomInt > 70 && randomInt < 75) {
//       alert ('это число от 70 до 75');
//     } else if (randomInt > 70 && randomInt < 80) {
//       alert ('это число от 70 до 80'); 
//     } else if (randomInt > 80 && randomInt < 85) {
//       alert ('это число от 80 до 85'); 
//     } else if (randomInt > 80 && randomInt < 90) {
//       alert ('это число от 80 до 90'); 
//     } else if (randomInt > 10 && randomInt < 20) {
//       alert ('это число от 90 до 95'); 
//     } else if (randomInt > 90 && randomInt < 100) {
//       alert ('это число от 90 до 100'); 
//     }
//     count--;
//     if (count === 0) {
//       alert('Вы проиграли')
//     } else {
//       startGame()
//     }
//   } 

//   startGame()
// }



// Задание 1

// confirm('Функция вернет вам меньшее число');
// let a = Number(prompt(`Введите первое число`));
// let b = Number(prompt(`Введите второе число`));

// const min = (a, b) => a < b ? a : b;

// alert(min(a, b));


//Задание 2


// let c = Number(prompt(`Функция определит чётное число или нечётное`));
// const isOdd = (c) => (c % 2 === 0) ? 'Число чётное' : 'Число нечётное';

// alert(isOdd(c));


//Задание 3

// const square = (number) => number ** 2;

// console.log(square(6));


//Задание 4

// function age () {
//     let age = Number(prompt(`Подтвердите свой возраст`));

//     if (age < 0) {
//         return 'Вы ввели неправильное значение'
//     } else if (age >= 0 && age <=12 ) {
//         return'Привет, друг!'
//     } else if (age >= 13) {
//         return'Добро пожаловать!'
//     } else {
//         return'Вы ввели не число'
//     }
// }

// alert(age());


//Задание 5

// const product = () => {
//     confirm(`Функция, принимет на вход два числа и выведет их произведение`);
//     let number1 = prompt(`Введите первое число`);
//     let number2 = prompt(`Введите второе число`);

//     if (isNaN(number1) || isNaN(number2)) {
//         return 'Одно или оба значения не являются числом'
//     } 
//     return number1 * number2 
    
// }

// alert(product());


//Задание 6

// const power = () => {
//     let num = prompt(`При введении корректного числа оно возведется в куб`);
    
//     if (isNaN(num)) {
//         return 'Переданный параметр не является числом'
//     } 
//     return `${num} в кубе равняется ${num ** 3}`
    
// }

// alert(power());


// Задание 7

function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * Math.PI * this.radius;
}
 
const circle1 = {
    radius: 10,
    getArea,
    getPerimeter
}
 
const circle2 = {
    radius: 5,
    getArea,
    getPerimeter
}
 
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());