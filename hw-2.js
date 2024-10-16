// Задание 1

// Вариант 1
let password = `Andrey`
let pass = prompt(`Введите пароль`);

if (password === pass) {
    alert(`Пароль введен верно`);
} else {
    alert(`Пароль введен неправильно`);
}

// // Вариант 2
let pass1 = prompt(`Введите пароль`);
(pass1 === `Andrey` ? alert(`Доступ предоставлен`) : alert(`В доступе отказано`));


// Задание 2

let c = Number(prompt(`Введите число от 0 до 10`));

if (c > 0 && c < 10) {
   alert(`Верно`);
} else {
    alert(`Не верно`);
}


// Задание 3

let d = Number(prompt(`Введите первое число`));
let e = Number(prompt(`Введите второе число`));

if (d > 100 || e > 100) {
    alert(`Верно`);
} else {
    alert(`Не верно`);
}


// Задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));


// Задание 5

let monthNumber = prompt("Введите число, по номеру месяца программа определит, какое время года в этом месяце");

switch (monthNumber) {
   case '1':
      alert('Январь - Второй месяц Зимы');
      break;
   case '2':
      alert('Февраль - Третий месяц Зимы');
      break;
   case '3':
      alert('Март - Первый месяц Весны');
      break;
   case '4':
      alert('Апрель - Второй месяц Весны');
      break;
   case '5':
      alert('Май - Третий месяц Весны');
      break;
   case '6':
      alert('Июнь - Первый месяц Лета');
      break;
   case '7':
      alert('Июль - Второй месяц Лета');
      break;
   case '8':
      alert('Август - Третий месяц Лета');
      break;  
   case '9':
      alert('Сентябрь - Первый месяц Осени');
      break;  
   case '10':
      alert('Октябрь - Второй месяц Осени');
      break;  
   case '11':
      alert('Ноябрь - Третий месяц Осени');
      break;  
   case '12':
      alert('Декабрь - Первый месяц Зимы');
      break;                         
   default:
      alert('Такого месяца не существует');
}


// Задание 6

let even =  prompt(`Пожалуйста введите любое число, программа определит чётное ли оно`);
let value = Number(even);
let result = value % 2 == 0;

if (value != Number(even)) {
    alert(`Введите корректное число`);
} else {
    if (result) {
        alert(`Это чётное число`);
    } else {
        alert(`Это нечетное число`);
    }
}


// Задание 7

let number; 


do {
    number - Number(prompt(`Введите 5 для проверки`));
} while (number !== 5);



let i = 1;

let n = Number(prompt(`Сколько раз вам сказать привет`));

while (i <=n) {
    alert(`Привет!`);
    i++;
}

