// Задание 1

for (let i = 0; i < 2; i++) {
    console.log(`Привет!`);
}


// Задание 2

for (let i = 1; i < 6; i++) {
    console.log(i);
}


// Задание 3

for (let i = 7; i < 23; i++) {
    console.log(i);
}


// Задание 4

const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
 }
 
 for (let key in obj) {
    console.log(`Имя сотрудника - ${key}: зарплата - ${obj[key]} долларов`);
 }


 // Задание 5

 let n = 1000;
 let m = 2;
 let num = 0;

 while (n /= m) {
    if (n <= 25){
        break;
    }
    console.log(n);
    num++;
    console.log(`Количество циклов ${num}`);
    
    n++;
 }


 // Задание 6

 let friday = 2;
 console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет. `);

 while (friday += 7) {
    if (friday >= 31){
        break;
    }
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет. `);
    friday++;
 }





