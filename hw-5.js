const game2 = () => {

    const randomInt1 = Math.round(Math.random() * 9) + 1;
    const randomInt2 = Math.round(Math.random() * 9) + 1;
    console.log(randomInt1);
    console.log(randomInt2);
    
    const sign = ['+', '-', '*', '/'];
    const randomInt3 = Math.floor(Math.random() *  sign.length);
    console.log(randomInt3);

    let operator = sign[randomInt3]
    console.log(operator);

    const userAnswer = Number(prompt(`${randomInt1} ${operator} ${randomInt2}    Посчитай и выведи ответ`));

    if (isNaN(userAnswer)) {
        alert(`Введено не число`);
    }

    const result = () => {
        switch (randomInt3) {
            case 0:
                if (userAnswer === randomInt1 + randomInt2) {
                    alert('Угадал')
                } else {
                    alert('Не угадал')
                }
                return randomInt1 + randomInt2
            case 1:
                if (userAnswer === randomInt1 - randomInt2) {
                    alert('Угадал')
                } else {
                    alert('Не угадал')
                }
                return randomInt1 - randomInt2
            case 2:
                if (userAnswer === randomInt1 * randomInt2) {
                    alert('Угадал')
                } else {
                    alert('Не угадал')
                }
                return randomInt1 * randomInt2
            case 3:
                if (userAnswer === randomInt1 / randomInt2) {
                    alert('Угадал')
                } else {
                    alert('Не угадал')
                }
                return randomInt1 / randomInt2                 
        }
    }

    alert(`Правильный ответ ${result()}`);
}



// Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    if(arr[i] === 10) {
        break
    }
}


// Задание 2

const arrLength = [1, 5, 4, 10, 0, 3];
console.log(arrLength.indexOf(4));


// Задание 3

const arrJoin= [1, 3, 5, 10, 20];
console.log(arrJoin.join(' '));


// Задание 4

const arrMassiv = [];

for(let i = 0; i < 3; i++) {
    const arrPush = []
    for(let j = 0; j < 3; j++) {
        arrPush.push(1)
    }
    arrMassiv.push(arrPush);
}
console.log(arrMassiv);


// Задание 5

const arrPush2 = [1, 1, 1];

arrPush2.push(2, 2, 2);
console.log(arrPush2);


//Задание 6

const arrSort = [9, 8, 7, 'a', 6, 5];

arrSort.sort();
console.log(arrSort);


//Задание 7

const arrIncludes = [9, 8, 7, 6, 5];
console.log(arrIncludes);

const userNumber = Number(prompt('Введите число, программа определит есть ли оно в массиве'));

if (arrIncludes.includes(userNumber)) {
    alert('Такое число есть в Массиве');
} else {
    alert('Такого числа нет в Массиве');
}


//Задание 8

let arrReverse = 'abcdef';

arrReverse = arrReverse.split('').reverse().join('');
console.log(arrReverse);


//Задание 9

const arrSpread = [[1, 2, 3], [4, 5, 6]];
const arrSpread2 = [];

for (let i = 0; i < arrSpread.length; i++) {
    arrSpread2.push(...arrSpread[i]); 
}
console.log(arrSpread2);


//Задание 10

const arrRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arrRandom.length; i++) {
    if (arrRandom[i + 1]) {
        console.log(arrRandom[i] + arrRandom[i + 1]);
    }  
}


//Задание 11

const num = (arrSquare) => arrSquare.map(nums => nums ** 2);
    
console.log(num([2, 3, 4, 5, 6, 7, 8, 9])); 


//Задание 12

const getLength = (arrLength) => arrLength.map(word => word.length);

console.log(getLength(['Привет', 'как', 'дела']));


//Задание 13

const filteredNums = (filteredNums) => filteredNums.filter(nums => nums < 0);
console.log(filteredNums([-1, 2, 3, 4, -5, 6, 7, -8, -9]));


//Задание 14

const rand = () => Math.round(Math.random() * 9) + 1;

const random = [];

for (let i = 0; i < 10; i++) {
    random.push(rand());
}
console.log(random);

const evenRandom = [];

for (let i = 0; i < random.length; i++) {
    if (random[i] % 2 ===0) {
        evenRandom.push(random[i]) 
    }   
}
console.log(evenRandom);


//Задание 15

const randNum = () => Math.round(Math.random() * 9) + 1;

const newRand = [];

for (let i = 0; i < 6; i++) {
    newRand.push(randNum());
}
console.log(newRand);
    
console.log(newRand.reduce((a, b) => a + b) / newRand.length); 

