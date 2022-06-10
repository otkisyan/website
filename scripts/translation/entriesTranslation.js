function checkLanguage() {
  if (localStorage.getItem("language") === "") {
    localStorage.setItem("language", "ua");
  }

  if (
    !window.location.hash ||
    window.location.hash === "#water" ||
    window.location.hash === "#gas" ||
    window.location.hash === "#electric"
  ) {
    window.location.hash += "#" + localStorage.getItem("language");
    //window.location.reload(true);
  }
}

var language = {
  ua: {
    water: "Вода",
    gas: "Газ",
    electric: "Електроенергія",
    title: "Історія показань",
    date: "Дата",
    previousEntry: "Попередні показання",
    newEntry: "Нові показання",
    rate: "Тариф",
    sumText: "Сума до сплати",
    error: "Ви ще не маєте записів в історії показань!",
    choose: "Оберіть необхідну комунальну послугу",
  },

  ru: {
    water: "Вода",
    gas: "Газ",
    electric: "Электроенергия",
    title: "История показаний",
    date: "Дата",
    previousEntry: "Предыдущие показания",
    newEntry: "Новые показания",
    rate: "Тариф",
    sumText: "Сумма к оплате",
    error: "У вас еще нет записей в истории показаний!",
    choose: "Выберите необходимую коммунальную услугу",
  },

  en: {
    water: "Water",
    gas: "Gas",
    electric: "Electricity",
    title: "History of readings",
    date: "Date",
    previousEntry: "Previous readings",
    newEntry: "New readings",
    rate: "Rate",
    sumText: "Amount to be paid",
    error: "You don't have a record in your readings history yet!",
    choose: "Select the desired communal service",
  },
};

function changeLanguages() {
  if (window.location.hash) {
    if (
      window.location.hash === "#water#ua" ||
      window.location.hash === "#gas#ua" ||
      window.location.hash === "#electric#ua"
    ) {
      title.textContent = language.ua.title;
      date.textContent = language.ua.date;
      previousEntry.textContent = language.ua.previousEntry;
      newEntry.textContent = language.ua.newEntry;
      currentRate.textContent = language.ua.rate;
      sumText.textContent = language.ua.sumText;
      error.textContent = language.ua.error;
    }

    if (window.location.hash === "#ua") {
      nonChoosed.textContent = language.ua.choose;
      title.textContent = language.ua.title;
      water.textContent = language.ua.water;
      gas.textContent = language.ua.gas;
      electricity.textContent = language.ua.electric;
    }

    if (window.location.hash === "#water#ua") {
      subtitle.textContent = language.ua.water;
    }
    if (window.location.hash === "#gas#ua") {
      subtitle.textContent = language.ua.gas;
    }
    if (window.location.hash === "#electric#ua") {
      subtitle.textContent = language.ua.electric;
    }

    if (
      window.location.hash === "#water#ru" ||
      window.location.hash === "#gas#ru" ||
      window.location.hash === "#electric#ru"
    ) {
      title.textContent = language.ru.title;
      date.textContent = language.ru.date;
      previousEntry.textContent = language.ru.previousEntry;
      newEntry.textContent = language.ru.newEntry;
      currentRate.textContent = language.ru.rate;
      sumText.textContent = language.ru.sumText;
      error.textContent = language.ru.error;
    }

    if (window.location.hash === "#ru") {
      nonChoosed.textContent = language.ru.choose;
      title.textContent = language.ru.title;
      water.textContent = language.ru.water;
      gas.textContent = language.ru.gas;
      electricity.textContent = language.ru.electric;
    }

    if (window.location.hash === "#water#ru") {
      subtitle.textContent = language.ru.water;
    }
    if (window.location.hash === "#gas#ru") {
      subtitle.textContent = language.ru.gas;
    }
    if (window.location.hash === "#electric#ru") {
      subtitle.textContent = language.ru.electric;
    }

    if (
      window.location.hash === "#water#en" ||
      window.location.hash === "#gas#en" ||
      window.location.hash === "#electric#en"
    ) {
      title.textContent = language.en.title;
      date.textContent = language.en.date;
      previousEntry.textContent = language.en.previousEntry;
      newEntry.textContent = language.en.newEntry;
      currentRate.textContent = language.en.rate;
      sumText.textContent = language.en.sumText;
      error.textContent = language.en.error;

      water.textContent = language.en.water;
      gas.textContent = language.en.gas;
      electricity.textContent = language.en.electric;
    }

    if (window.location.hash === "#en") {
      nonChoosed.textContent = language.en.choose;
      title.textContent = language.en.title;
      water.textContent = language.en.water;
      gas.textContent = language.en.gas;
      electricity.textContent = language.en.electric;
    }

    if (window.location.hash === "#water#en") {
      subtitle.textContent = language.en.water;
    }
    if (window.location.hash === "#gas#en") {
      subtitle.textContent = language.en.gas;
    }
    if (window.location.hash === "#electric#en") {
      subtitle.textContent = language.en.electric;
    }
  }
}
