function createEntries(type) {
  if (
    localStorage.getItem("arrayCreated" + type) === "" ||
    localStorage.getItem("arrayCreated" + type) === null
  ) {
    localStorage.setItem("arrayCreated" + type, true);

    let Entries = [
      {
        currentDate: null,
        previousEntries: null,
        newEntries: null,
        rate: null,
        sum: null,
      },
    ];

    localStorage.setItem("Entries" + type, JSON.stringify(Entries));
  }

  if (
    localStorage.getItem("EntriesSize" + type) === "" ||
    localStorage.getItem("EntriesSize" + type) === null
  ) {
    localStorage.setItem("EntriesSize" + type, 0);
  }
}

function saveEntries(type) {
  let i = localStorage.getItem("EntriesSize" + type);
  let Entries = JSON.parse(localStorage.getItem("Entries" + type));

  //current date
  today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  today = dd + "/" + mm + "/" + yyyy;
  //

  if (
    document.getElementById("previousValue").value.length != 0 &&
    document.getElementById("newValue").value.length != 0 &&
    document.getElementById("rate").value.length != 0
  ) {
    Entries[i] = {
      currentDate: today,
      previousEntries: document.getElementById("previousValue").valueAsNumber,
      newEntries: document.getElementById("newValue").valueAsNumber,
      rate: document.getElementById("rate").valueAsNumber,
      sum: document.getElementById("sum").valueAsNumber,
    };

    localStorage.setItem("Entries" + type, JSON.stringify(Entries));
    i++;
    localStorage.setItem("EntriesSize" + type, i);
  }
}

function redirect(type) {
  window.location.href = "entries.html" + "#" + type;
}
