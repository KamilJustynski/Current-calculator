const inputElement = document.querySelector(".js--input");
const currencyElement = document.querySelector(".js--currency");
const resultElement = document.querySelector(".js--result");
const buttonElement = document.querySelector(".js--form");

let currencyUSD = 4.18;
let currencyEUR = 4.47;
let currencyGBP = 5.19;
let currencyCHF = 4.61;

buttonElement.addEventListener("submit", (e) => {
  e.preventDefault();

  let amount = +inputElement.value;
  let currency = currencyElement.value;
  let result;

  switch (currency) {
    case "USD":
      result = amount / currencyUSD;
      break;
    case "EUR":
      result = amount / currencyEUR;
      break;
    case "GBP":
      result = amount / currencyGBP;
      break;
    case "CHF":
      result = amount / currencyCHF;
      break;
  }

  resultElement.innerText = ` ${result.toFixed(2)} ${currency}`
});
