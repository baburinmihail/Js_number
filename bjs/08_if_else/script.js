let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

//проверка вводных данных на тип
if (isNaN(minValue) || isNaN(maxValue) ){
    minValue = 0;
    maxValue = 100;
}
//проверки вводных данных на ограничение(тернарный тип)
(minValue<-999) ? (minValue=-999): (minValue = minValue);
(maxValue>999) ? (maxValue=999): (maxValue = maxValue);

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let questionText = 'Текст вопроса';


//номер вопроса (5)
const orderNumberField = document.getElementById('orderNumberField');
//Вы загадали число 5?
const answerField = document.getElementById('answerField');

//Приравниваю к 1 и перевожу в текст
orderNumberField.innerText = orderNumber;


//функция вывода заготовленного вопроса
function questionRandomfun(){
    let questionRandom = Math.round( Math.random()*3);
    switch(questionRandom){
        case (1):  
            questionText = 'Люк я твой отец';
            break;
        case (2):  
            questionText = 'Угадал';
            break;
        case (3):  
            questionText = 'Возможно это число';
            break;    
        default:
            questionText = 'Не это';
            break;
    }
}
questionRandomfun();


answerField.innerText = `${questionText}  ${answerNumber }?`;


//перезапуск
document.getElementById('btnRetry').addEventListener('click', function () {
    location.reload();
})

//кнопка больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                //true
                `Вы загадали неправильное число!\n` :
                //false
                `Я сдаюсь..\n`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            //функция приобразования числа в строку
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `${questionText}  ${answerNumber }?`;
        }
    }
})

//кнопка меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue ){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                //true
                `Вы загадали неправильное число!\n` :
                //false
                `Я сдаюсь..\n`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            //от ноля и выше
            if ((maxValue || minValue) > 0) {
                maxValue = answerNumber  - 1;
                answerNumber  = Math.ceil((maxValue - minValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                answerField.innerText = `${questionText}  ${answerNumber }?`;
            //меньше ноля    
            }else{
                minValue = answerNumber  - 1;
                answerNumber  = Math.round(((-1) * (maxValue - minValue)) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                answerField.innerText = `${questionText}  ${answerNumber }?`;
            }
        }
    }
})

//кнопка верно(конец игры)
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let WinRandom = Math.round( Math.random()*3);
        switch(WinRandom){
            case (1):  
                answerField.innerText = `Я всегда угадываю\n`
                break;
            case (2):  
                answerField.innerText = `Я хорош)\n`
                break;   
            default:
                questionText = 'Ты был неплох';
            break;
        }
        gameRun = false;
    }
})



