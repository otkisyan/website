function checkLanguage() {
  if (localStorage.getItem("language") === "") {
    localStorage.setItem("language", "ua");
  }

  if (!window.location.hash) {
    window.location.hash = "#" + localStorage.getItem("language");
    //window.location.reload(true);
  }
}

var language = {
  ua: {
    //Calculation page: Titles
    gasTitle: "ГАЗ",
    webTitleGas: "Обчислення газу",

    //Calculation page: Form
    previousEntry: "Попередні показання",
    newEntry: "Нові показання",
    rate: "Тариф",
    sumText: "Сума до сплати",
    sumButton: "ОБЧИСЛИТИ",
    history: "Історія показань",
  },

  ru: {
    //Calculation page: Titles
    gasTitle: "ГАЗ",
    webTitleGas: "Рассчет газа",

    //Calculation page: Form
    previousEntry: "Предыдущие показания",
    newEntry: "Новые показания",
    rate: "Тариф",
    sumText: "Сумма к оплате",
    sumButton: "РАССЧИТАТЬ",
    history: "История показаний",
  },

  en: {
    //Calculation page: Titles
    gasTitle: "GAS",
    webTitleGas: "Gas calculation",

    //Calculation page: Form
    previousEntry: "Previous readings",
    newEntry: "New readings",
    rate: "Rate",
    sumText: "Amount to be paid",
    sumButton: "CALCULATE",
    history: "History of readings",
  },
};

function changeLanguages() {
  if (window.location.hash) {
    if (window.location.hash === "#ua") {
      //Calculation page: Titles
      gasTitle.textContent = language.ua.gasTitle;
      webTitleGas.textContent = language.ua.webTitleGas;

      //Calculation page: Form
      previousEntry.textContent = language.ua.previousEntry;
      newEntry.textContent = language.ua.newEntry;
      currentRate.textContent = language.ua.rate;
      sumText.textContent = language.ua.sumText;
      sumButton.setAttribute("value", language.ua.sumButton);
      previousEntries.textContent = language.ua.history;
    }

    if (window.location.hash === "#ru") {
      //Calculation page: Titles
      gasTitle.textContent = language.ru.gasTitle;
      webTitleGas.textContent = language.ru.webTitleGas;

      //Calculation page: Form
      previousEntry.textContent = language.ru.previousEntry;
      newEntry.textContent = language.ru.newEntry;
      currentRate.textContent = language.ru.rate;
      sumText.textContent = language.ru.sumText;
      sumButton.setAttribute("value", language.ru.sumButton);
      previousEntries.textContent = language.ru.history;
    }

    if (window.location.hash === "#en") {
      //Calculation page: Titles
      gasTitle.textContent = language.en.gasTitle;
      webTitleGas.textContent = language.en.webTitleGas;

      //Calculation page: Form
      previousEntry.textContent = language.en.previousEntry;
      newEntry.textContent = language.en.newEntry;
      currentRate.textContent = language.en.rate;
      sumText.textContent = language.en.sumText;
      sumButton.setAttribute("value", language.en.sumButton);
      previousEntries.textContent = language.en.history;
    }
  }
}
