//document.getElementById("sumButton").addEventListener("click", finalSum());
//document.getElementById("sumButton").onclick = function() {finalSum()};

function finalSum() {
  var lastValue = document.getElementById("previousValue").valueAsNumber;
  var newValue = document.getElementById("newValue").valueAsNumber;
  var rate = document.getElementById("rate").valueAsNumber;

  var sum = (newValue - lastValue) * rate;

  document.getElementById("sum").valueAsNumber = sum.toFixed(2);
}
