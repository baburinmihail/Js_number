function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Оксана",
            "id_3": "Ирина",
            "id_4": "Артемида",
            "id_5": "Светлана",
            "id_6": "Анна",
            "id_7": "Мишель",
            "id_8": "Анастасия",
            "id_9": "Евдотия",
            "id_10": "Галина"
        }
    }`,

    patronymicNameMan: `{
        "count": 5,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Андреевич",
            "id_3": "Иванович",
            "id_4": "Михайлович",
            "id_5": "Игнатович"
        }
    }`,

    patronymicNameGerl: `{
        "count": 5,
        "list": {     
            "id_1": "Кириловна",
            "id_2": "Анатольевна",
            "id_3": "Данииловна",
            "id_4": "Богдановна",
            "id_5": "Артемовна"
        }
    }`,

    workMan: `{
        "count": 5,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Электромеханик",
            "id_3": "Электроэнергетик",
            "id_4": "Связист",
            "id_5": "Сварщик"
        }
    }`,

    workGerl: `{
        "count": 5,
        "list": {     
            "id_1": "Повар",
            "id_2": "Дежурный по станции",
            "id_3": "Грузовой диспетчер",
            "id_4": "Экономист",
            "id_5": "Бухгалтер "
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',


    
    //генератор случайного id
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    //расчет максимального id из json
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    //мальчик или девочка
    randomGender: function (){
        let gender = 10
        let genderNumberRandom = Math.round( Math.random()*1);
        if ( genderNumberRandom === 1 ){
            gender = 1;
            return gender = 1;
        }else {
            gender = 0;
            return gender = 0;
        }
    },

    //год рождения
    year: function () {
        const yearChoes = randomIntFromInterval(1942, 2003);
        return yearChoes;
    },

    //месяц и день
    dataOrigin: function () {
        const month = randomIntFromInterval(1, 12);
        const day = randomIntFromInterval(1, 30);
        const day_twenty_eight = randomIntFromInterval(1, 28);
        const day_thirty = randomIntFromInterval(1, 28);
        switch(month){
            case (1):  
                monthText = (day + ' январь ');
                break;
            case (2):
                monthText = (day_twenty_eight + ' февраль ');  
                break;
            case (3):
                monthText = (day + ' март ');  
                break;
            case (4):
                monthText = (day_thirty + ' апрель ');    
                break; 
            case (5):
                monthText = (day + ' май ');    
                break;  
            case (6):
                monthText = (day_thirty + ' июнь ');    
                break;  
            case (7):
                monthText = (day + ' июль ');      
                break;
            case (8):
                monthText = (day + ' август ');      
                break;
            case (9):
                monthText = (day_thirty + ' сентябрь ');      
                break;
            case (10):
                monthText = (day + ' октябрь ');   
                break;
            case (11):
                monthText = (day_thirty + ' ноябрь ');   
                break;                  
            default:
                monthText = (day + ' декабрь '); 
                break;
        }
        return monthText
    },

    // функция муржского имени
    randomManFirstName: function() {
        return this.randomValue(this.firstNameMaleJson);
    },

    // функция муржского имени
    randomGerlFirstName: function() {
        return this.randomValue(this.firstNameFemaleJson);
    },

    // функция фамилии
    randomSurname: function() {
        return this.randomValue(this.surnameJson);
    },

    // функция муж. отчества
    randomPatronymicMan: function() {
        return this.randomValue(this.patronymicNameMan);
    },

    // функция жен. отчества
    randomPatronymicGerl: function() {
        return this.randomValue(this.patronymicNameGerl);
    },

    // функции работы
    randomWorkMan: function() {
        return this.randomValue(this.workMan);
    },

    randomWorkGerl: function() {
        return this.randomValue(this.workGerl);
    },

    //присвоение объекту определенных св-тв 
    getPerson: function () {
        this.person = {};
        genderChoes = this.randomGender();
        if (genderChoes === 1){
            this.person.birthData = this.dataOrigin();
            this.person.birthYear = this.year();
            this.person.gender = this.GENDER_MALE;
            this.person.firstName = this.randomManFirstName();
            this.person.surnameJson = this.randomSurname();
            this.person.patronymicGender = this.randomPatronymicMan();
            this.person.work = this.randomWorkMan();
            return this.person;
        }else{
            this.person.birthData = this.dataOrigin();
            this.person.birthYear = this.year();
            this.person.gender = this.GENDER_FEMALE;
            this.person.firstName = this.randomGerlFirstName();
            this.person.surnameJson = `${this.randomSurname()}а`;
            this.person.patronymicGender = this.randomPatronymicGerl();
            this.person.work = this.randomWorkGerl();
            return this.person;
        }
        
        
        
        
        
        
    }
};
