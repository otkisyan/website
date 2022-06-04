
function createEntries(){

    if(localStorage.getItem('arrayCreated') === '' || localStorage.getItem('arrayCreated') === null){
        localStorage.setItem('arrayCreated', true);

        let Entries = [
            {
            currentDate: null,
            previousEntries: null,
            newEntries: null,
            rate: null,
            sum: null,
        },
        ]

        localStorage.setItem("Entries", JSON.stringify(Entries));
        
    }

    if(localStorage.getItem('EntriesSize') === '' || localStorage.getItem('EntriesSize') === null){
        localStorage.setItem('EntriesSize', 0);
    }

}

function saveEntries(){

    let i = localStorage.getItem('EntriesSize');
    let Entries = JSON.parse(localStorage.getItem('Entries'));

    //current date
    today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; 
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    today = dd + '/' + mm + '/' + yyyy;
    //
    
    if(document.getElementById("previousValue").value.length != 0 && document.getElementById("newValue").value.length != 0 && document.getElementById("rate").value.length != 0){
    
    Entries[i] = {
        currentDate: today,
        previousEntries: document.getElementById("previousValue").valueAsNumber,
        newEntries: document.getElementById("newValue").valueAsNumber,
        rate: document.getElementById("rate").valueAsNumber,
        sum: document.getElementById("sum").valueAsNumber,
    }

    localStorage.setItem("Entries", JSON.stringify(Entries));
    i++;
    localStorage.setItem("EntriesSize", i);
    
}

}



