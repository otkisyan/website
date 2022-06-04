function getType(){

    if(window.location.hash){
        if(window.location.hash === "#water"){
            return "Water";
            
        }
        if(window.location.hash === "#gas"){
            return "Gas";
        }
        if(window.location.hash === "#electric"){
            return "Electric";
        }
}
}

function buildTable(){
    
    let type = getType();
    let Table = document.getElementById("tableData")
    let Entries = JSON.parse(localStorage.getItem('Entries' + type));

    if (Entries[0].previousEntries === null){
        document.getElementById("error").style.visibility = "visible"
        document.getElementById("entriesTable").style.display = "none"
        document.getElementById("errorImage").style.visibility = "visible"

    }

    for(let i = 0; i < localStorage.getItem('EntriesSize' + type); i++){
        let row = `<tr>
            <td>${(Entries[i]).currentDate}</td>
            <td>${(Entries[i]).previousEntries}</td>
            <td>${(Entries[i]).newEntries}</td>
            <td>${(Entries[i]).rate}</td>
            <td>${(Entries[i]).sum}</td>

        </tr>`
        Table.innerHTML += row;
        
        
         
        
    }
}