let inputmin = document.querySelector('#input_min');
let inputmax = document.querySelector('#input_max');
let duplicateMinValue = document.querySelector('#duplicateMinValue');
let duplicateMaxValue = document.querySelector('#duplicateMaxValue');
let start_button = document.querySelector('#start_button');
let game_place = document.querySelector('#game_place');
let start_menu = document.querySelector('#start_menu');

// Присваиюваю обработчик события на инпут
inputmin.addEventListener('keyup', input_key1=> {  
    duplicateMinValue.textContent = input_key1.target.value
});

inputmax.addEventListener('keyup', input_key2=> {  
    duplicateMaxValue.textContent = input_key2.target.value
});
console.log('inputmin=',inputmin)
console.log('inputmax=',inputmax)


//начало игры



start_button.onclick = function() { 

let minValue = parseInt(document.querySelector('#input_min').value);
let maxValue = parseInt(document.querySelector('#input_max').value);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let questionText = 'Текст вопроса';
let znak = ''
let dlinnaText = 3;
let sotkiTextLength = 0;
let desytkiTextLength = 0;
let edenitchTextLength = 0;
let sotkiText = ' ';
let desytkiText = ' ';
let edenitchText = ' ';

visible_game();
TextCorection();

//console.log('inputmin=',inputmin)
//console.log('inputmax=',inputmax)
console.log('minValue=',minValue)
console.log('maxValue=',maxValue)


//проверка вводных данных на тип
if (isNaN(minValue) || isNaN(maxValue) ){
    minValue = 100;
    maxValue = 200;
}
//проверки вводных данных на ограничение(тернарный тип)
(minValue < -999) ? (minValue = -999): (minValue = minValue);
(maxValue > 999) ? (maxValue = 999): (maxValue = maxValue);




//номер вопроса (5)
const orderNumberField = document.getElementById('orderNumberField');
//Вы загадали число 5?
const answerField = document.getElementById('answerField');

//Приравниваю к 1 и перевожу в текст
orderNumberField.innerText = orderNumber;

//функция случайного вопроса
questionRandomfun();

//функция объеденяющая 4 функци(знак и 3 разряда уже в текстовом виде) 
combiningDigits();


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
            combiningDigits();
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
                combiningDigits();
            //меньше ноля    
            }else{
                minValue = answerNumber  - 1;
                answerNumber  = Math.round(((-1) * (maxValue - minValue)) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                combiningDigits();
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

//функция проверки коррекности данных
function TextCorection(){
    if (minValue>=maxValue){
        alert('Данные введены не коректно');
        location.reload();
    }
}

//функция вывода заготовленного вопроса
function questionRandomfun(){
    let questionRandom = Math.round( Math.random()*3);
    switch(questionRandom){
        case (1):  
            questionText = 'Люк я твой отец ';
            break;
        case (2):  
            questionText = 'Угадал ';
            break;
        case (3):  
            questionText = 'Возможно это число ';
            break;    
        default:
            questionText = 'Не это число ';
            break;
    }
}


//функция на сотни
function numberToTextSotki(){
    let sotki = Math.abs(answerNumber);
    if ((sotki/100)>1){
        sotki = Math.trunc(sotki/100);
        switch(sotki){
            case (1):  
                sotkiText = 'сто ';
                console.log(sotkiText);
                sotkiTextLength = sotkiText.length;
                break;    
            case (2):
                sotkiText = 'двести ';
                console.log(sotkiText);
                sotkiTextLength = sotkiText.length;
                break;
            case (3):
                sotkiText = 'триста ';
                console.log(sotkiText);
                sotkiTextLength = sotkiText.length;
                break;
            case (4):
                sotkiText = 'четыриста ';
                console.log(sotkiText);
                sotkiTextLength = sotkiText.length;
                break;
            case (5):
                sotkiText = 'пятьсот ';
                console.log(sotkiText);
                sotkiTextLength = sotkiText.length;
                break;
            case (6):
                sotkiText = 'шесот ';
                console.log(sotkiText);
                sotkiTextLength = sotkiText.length;
                break;
            case (7):
                sotkiText = 'семьсот ';
                console.log(sotkiText);
                sotkiTextLength = sotkiText.length;
                break;
            case (8):
                sotkiText = 'восемьсот ';
                console.log(sotkiText);
                sotkiTextLength = sotkiText.length;
                break;
            case (9):
                sotkiText = 'девятьсот ';
                sotkiTextLength = sotkiText.length;
                console.log(sotkiText);
                break;    
        }
    }else{
        sotkiText = ''
        console.log(sotkiText);
        sotkiTextLength = sotkiText.length;
    }
}

//функция на десятки
function numberToTextDesytki(){
    let desytki = Math.abs(answerNumber);
    if (desytki>9){
        desytki = Math.trunc(((desytki%100)-(desytki%10))/10);
        console.log(desytki)
        switch(desytki){
            case (0):  
                desytkiText = ' ';
                console.log(desytkiText)
                desytkiTextLength = desytkiText.length;
                break;  
            case (1):  
                desytkiText = 'десять ';
                console.log(desytkiText)
                desytkiTextLength = desytkiText.length;
                break;    
            case (2):
                desytkiText = 'двадцать ';
                console.log(desytkiText);
                desytkiTextLength = desytkiText.length;
                break;
            case (3):
                desytkiText = 'тридцать ';
                console.log(desytkiText);
                desytkiTextLength = desytkiText.length;
                break;
            case (4):
                desytkiText = 'сорак ';
                console.log(desytkiText);
                desytkiTextLength = desytkiText.length;
                break;
            case (5):
                desytkiText = 'пятьдесят ';
                console.log(desytkiText);
                desytkiTextLength = desytkiText.length;
                break;
            case (6):
                desytkiText = 'шестьдесят ';
                console.log(desytkiText);
                break;
            case (7):
                desytkiText = 'семдесят ';
                console.log(desytkiText);
                desytkiTextLength = desytkiText.length;
                break;
            case (8):
                desytkiText = 'восемьдесят ';
                console.log(desytkiText);
                desytkiTextLength = desytkiText.length;
                break;
            case (9):
                desytkiText = 'девяносто ';
                console.log(desytkiText);
                desytkiTextLength = desytkiText.length;
                break;    
        }
    }else{
        desytkiText = '_'
        console.log(desytkiText)
        desytkiTextLength = desytkiText.length
    }
}

//функция на еденицы
function numberToTextEdenitch(){
    let edenitch = Math.abs(answerNumber);
    if (edenitch>-1){
        edenitch = Math.trunc(edenitch%10);
        console.log(edenitch)
        switch(edenitch){
            case (0):  
                edenitchText = ' ';
                console.log(edenitchText);
                edenitchTextLength = edenitchText.length;
                break;  
            case (1):  
                edenitchText = 'один ';
                console.log(edenitchText);
                edenitchTextLength = edenitchText.length;
                break;    
            case (2):
                edenitchText = 'два ';
                console.log(edenitchText);
                edenitchTextLength = edenitchText.length;
                break;
            case (3):
                edenitchText = 'три ';
                console.log(edenitchText);
                edenitchTextLength = edenitchText.length;
                break;
            case (4):
                edenitchText = 'четыри ';
                console.log(edenitchText);
                edenitchTextLength = edenitchText.length;
                break;
            case (5):
                edenitchText = 'пять ';
                console.log(edenitchText);
                edenitchTextLength = edenitchText.length;
                break;
            case (6):
                edenitchText = 'шесть ';
                console.log(edenitchText);
                edenitchTextLength = edenitchText.length;
                break;
            case (7):
                edenitchText = 'семь ';
                console.log(edenitchText);
                edenitchTextLength = edenitchText.length;
                break;
            case (8):
                edenitchText = 'восемь ';
                console.log(edenitchText);
                edenitchTextLength = edenitchText.length;
                break;
            case (9):
                edenitchText = 'девять ';
                console.log(edenitchText);
                edenitchTextLength = edenitchText.length;
                break;    
        }
    }else{
        edenitchText = ' '
        console.log(edenitchText);
        edenitchTextLength = edenitchText.length;
    }
}

//функция склеивания и проверки на динну символов
function combiningDigits(){
    (answerNumber>=0)?(znak = '+'):(znak = '-');
    console.log(znak)
    numberToTextSotki();
    numberToTextDesytki();
    numberToTextEdenitch();
    dlinnaText = (sotkiTextLength + desytkiTextLength + edenitchTextLength);
    console.log(dlinnaText);
        //вывод результата
        if (dlinnaText>20){
            answerField.innerText = `${questionText}  ${answerNumber }?`;
        }else{
            answerField.innerText = `${questionText}  ${(sotkiText+desytkiText+edenitchText) }?`;
        }
}

function visible_game(){  
    
    game_place.style.visibility = "visible";
    game_place.style.opacity = "1";
    game_place.style.transition = "all 0.7s ease-out 0s";
    
    start_menu.style.visibility = "hidden";
    start_menu.style.opacity = '0';   
}


function invisible_game(){
    game_place.style.visibility = "hidden";
    game_place.style.opacity = '0'; 
    
    start_menu.style.visibility = "visible";
    start_menu.style.opacity = "1";
    start_menu.style.transition = "all 0.7s ease-out 0s";
}

// конец кнопки
};