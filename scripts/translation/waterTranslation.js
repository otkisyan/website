

var language = {
    "ua": {
        
        //Calculation page: Titles
        waterTitle: "ВОДА",
        webTitleWater: "Обчислення води",

        //Calculation page: Form
        previousEntry: "Попередні показання",
        newEntry: "Нові показання",
        rate: "Тариф",
        sumText: "Сума до сплати",
        sumButton: "ОБЧИСЛИТИ"

    },

    "ru": {
       
        //Calculation page: Titles
        waterTitle: "ВОДА",
        webTitleWater: "Рассчет воды",

        //Calculation page: Form
        previousEntry: "Предыдущие показания",
        newEntry: "Новые показания",
        rate: "Тариф",
        sumText: "Сумма к оплате",
        sumButton: "РАССЧИТАТЬ"
        
    },

    "en": {
       
         //Calculation page: Titles
         waterTitle: "WATER",
         webTitleWater: "Water calculation",
 
         //Calculation page: Form
         previousEntry: "Previous readings",
         newEntry: "New readings",
         rate: "Rate",
         sumText: "Amount to be paid",
         sumButton: "CALCULATE"
    }
};


if(window.location.hash){

    if(window.location.hash === "#ua"){
       
        //Calculation page: Titles
        waterTitle.textContent = language.ua.waterTitle;
        webTitleWater.textContent = language.ua.webTitleWater;

        //Calculation page: Form
        previousEntry.textContent = language.ua.previousEntry;
        newEntry.textContent = language.ua.newEntry;
        currentRate.textContent = language.ua.rate;
        sumText.textContent = language.ua.sumText;
        sumButton.setAttribute("value", language.ua.sumButton);

    }


    if(window.location.hash === "#ru"){
        
        //Calculation page: Titles
        waterTitle.textContent = language.ru.waterTitle;
        webTitleWater.textContent = language.ru.webTitleWater;

        //Calculation page: Form
        previousEntry.textContent = language.ru.previousEntry;
        newEntry.textContent = language.ru.newEntry;
        currentRate.textContent = language.ru.rate;
        sumText.textContent = language.ru.sumText;
        sumButton.setAttribute("value", language.ru.sumButton);

    }

   
    if(window.location.hash === "#en"){
       
        //Calculation page: Titles
        waterTitle.textContent = language.en.waterTitle;
        webTitleWater.textContent = language.en.webTitleWater;

        //Calculation page: Form
        previousEntry.textContent = language.en.previousEntry;
        newEntry.textContent = language.en.newEntry;
        currentRate.textContent = language.en.rate;
        sumText.textContent = language.en.sumText;
        sumButton.setAttribute("value", language.en.sumButton);

    }

}
