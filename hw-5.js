const game2 = () => {
    const randomInt1 = Math.round(Math.random() * 10) + 1;
    const randomInt2 = Math.round(Math.random() * 10) + 1;
    const randomInt3 = Math.round(Math.random() *  4) + 1;
    randomInt3 = [1, 2, 3, 4];

    const operator = {
        1:'+', 
        2:'-', 
        3:'*', 
        4:'/'
    }

    const getExample = () => {
        return `${randomInt1} ${randomInt3} ${randomInt2}`;
    }

    alert(getExample());

    // const result = firstValue - secondValue;

    const userAnswer = prompt("посчитай и выведи ответ");

    if (!isNaN(userAnswer) && userAnswer === getExample) {
        alert("верный ответ")
    } 
    console.log(operator);

}