function getLanguage(currentLang){

    localStorage.setItem('language', currentLang);
}

const currentLanguage = localStorage.getItem('language');

function reloadPage(lang)
{
    window.location.hash = "#" + lang;
    window.location.reload(true);
 }

 function checkLanguage(){

    if(localStorage.getItem('language') === ''){
        localStorage.setItem('language', 'ua');
    }

    if(!window.location.hash){ 
    window.location.hash = "#" + localStorage.getItem('language');
    window.location.reload(true); 
   
     }
     
 }

 
 function redirect(filename){
    window.location.href = filename + window.location.hash;
 }

var language = {

    "ua": {
        //Home page
        title: "Калькулятор комунальних послуг",
        subtitle: "Натисніть на кнопку щоб пійти далі",
        water: "Вода",
        gas : "Газ",
        electricity: "Електроенергія",
        changeLanguage: "Змінити мову",
        info: "Інформація для користувача",

        //Info popup
        titleContent: "Привіт!",
        textContent: "Дане ПЗ створено для користувачів, аби полегшити роботу з показниками комунальних послуг та замінити розрахункову книжку. Щоб почати користуватися даною програмою варто просто натиснути кнопку з вибраною комунальною послугою (вода, газ, електроенергія), занести до визначених полів показники з лічильника та тариф, зазначений компанією постачальником, та натиснути кнопку 'Обчислити', визначене поле виведе ціну, яку ви повинні будете сплатити. "

    },

    "ru": {
        //Home page
        title: "Калькулятор коммунальних услуг",
        subtitle: "Нажмите на кнопку чтобы перейти дальше",
        water: "Вода",
        gas : "Газ",
        electricity: "Электроэнергия",
        changeLanguage: "Изменить язык",
        info: "Информация для пользователя",

        //Info popup
        titleContent: "Привет!",
        textContent: "Данное ПО создано для пользователей, чтобы облегчить работу по показателям коммунальных услуг и заменить расчетную книгу. Чтобы начать пользоваться данной программой, следует просто нажать кнопку с выбранной коммунальной услугой (вода, газ, электроэнергия), занести в определенные поля показатели со счетчика и тариф, указанный компанией поставщиком, и нажать кнопку 'Вычислить', определенное поле выведет цену, которую вы должны будете оплатить. "

    },

    "en": {
        //Home page
        title: "Calculator of communal services",
        subtitle: "Click on the button to go further",
        water: "Water",
        gas : "Gas",
        electricity: "Electricity",
        changeLanguage: "Change language",
        info: "User information",

        //Info popup
        titleContent: "Hello!",
        textContent: "This software is designed for users to make it easier to work on utility service readings and replace the billing ledger. To start using this program, you just need to click the button with the selected utility service (water, gas, electricity), enter in certain fields the meter readings and the tariff specified by the supplier company, and click the 'Calculate' button, the certain field will display the price you will have to pay."



        
    }
};


if(window.location.hash){
    if(window.location.hash === "#ru"){
        //Home page
        title.textContent = language.ru.title;
        subtitle.textContent = language.ru.subtitle;
        water.textContent = language.ru.water;
        gas.textContent = language.ru.gas;
        electricity.textContent = language.ru.electricity;
        changeLanguage.textContent = language.ru.changeLanguage;
        info.textContent = language.ru.info;
        
        //Info popup
        contentTitle.textContent = language.ru.titleContent;
        textContent.textContent = language.ru.textContent;

    }

    if(window.location.hash === "#ua"){
        //Home page
        title.textContent = language.ua.title;
        subtitle.textContent = language.ua.subtitle;
        water.textContent = language.ua.water;
        gas.textContent = language.ua.gas;
        electricity.textContent = language.ua.electricity;
        changeLanguage.textContent = language.ua.changeLanguage;
        info.textContent = language.ua.info;

        //Info popup
        contentTitle.textContent = language.ua.titleContent;
        textContent.textContent = language.ua.textContent;


    }

    if(window.location.hash === "#en"){
        //Home page
        title.textContent = language.en.title;
        subtitle.textContent = language.en.subtitle;
        water.textContent = language.en.water;
        gas.textContent = language.en.gas;
        electricity.textContent = language.en.electricity;
        changeLanguage.textContent = language.en.changeLanguage;
        info.textContent = language.en.info;
       

        //Info popup
        contentTitle.textContent = language.en.titleContent;
        textContent.textContent = language.en.textContent;

    }

}
