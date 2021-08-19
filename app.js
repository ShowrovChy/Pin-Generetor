document.getElementById("generate-pin").addEventListener("click", function () {
  document.getElementById("pin").value = pinNumbers();
});
document.getElementById("clear-pin").addEventListener("click", function () {
  document.getElementById("pin").value = "";
  document.getElementById("right").style.display = "none";
  document.getElementById("wrong").style.display = "none";
});
function pinNumbers() {
  document.getElementById("right").style.display = "none";
  document.getElementById("wrong").style.display = "none";
  document.getElementById("typed-numbers").value = "";

  const RandomNumbers = Math.round(Math.random() * 10000);
  const numbersText = RandomNumbers + "";
  if (numbersText.length == 4) {
    return RandomNumbers;
  } else {
    return pinNumbers();
  }
}

// Number Pad------------------------->

document
  .getElementById("number-pad")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");
    if (isNaN(number)) {
      if (number == "C") {
        calcInput.value = "";
      } else if (number == "<") {
        calcInput.value = calcInput.value.substr(0, calcInput.value.length - 1);
      }
    } else {
      const previousNumber = calcInput.value;
      const newNumber = previousNumber + number;
      calcInput.value = newNumber;
    }
  });

document.getElementById("submit").addEventListener("click", function () {
  const gotPin = document.getElementById("pin").value;
  const typedNumber = document.getElementById("typed-numbers").value;

  if (gotPin == typedNumber) {
    document.getElementById("right").style.display = "block";
    document.getElementById("wrong").style.display = "none";
    // console.log("Excellent");
  } else {
    document.getElementById("wrong").style.display = "block";
    document.getElementById("right").style.display = "none";
    // console.log("See You Not For Mind");
  }
});
