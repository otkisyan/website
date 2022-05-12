//document.getElementById("sumButton").addEventListener("click", finalSum());
//document.getElementById("sumButton").onclick = function() {finalSum()};


function finalSum()
{
    
    console.log("Sum button clicked");
    var lastValue = document.getElementById("previousValue").valueAsNumber;
    var newValue = document.getElementById("newValue").valueAsNumber;
    var rate = document.getElementById("rate").valueAsNumber;

    var sum = newValue + rate + lastValue;
    
    document.getElementById("sum").valueAsNumber = sum.toFixed(2);
    
}