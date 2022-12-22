let clinerButton = document.querySelector('#clinerButton');

//функция генерации
function generator(){
    const initPerson = personGenerator.getPerson();
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surnameJson;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymicGender;
    document.getElementById('birthDateOutput').innerText = initPerson.birthData;
    document.getElementById('profeshin').innerText = initPerson.work;
}

//функция очистки
function clinerForm(){
    document.getElementById('birthYearOutput').innerText = " ";
    document.getElementById('genderOutput').innerText = " ";
    document.getElementById('firstNameOutput').innerText = " ";
    document.getElementById('surnameOutput').innerText = " ";
    document.getElementById('patronymicOutput').innerText = " ";
    document.getElementById('birthDateOutput').innerText = " ";
    document.getElementById('profeshin').innerText = " ";
}


window.onload = generator();


//события на кнопки
document.querySelector('#startButton').addEventListener('click', function () {
    generator()
});

document.querySelector('#clinerButton').addEventListener('click', function () {
    clinerForm()
});