const inputElement = document.querySelector(".js--input");
const currencyElement = document.querySelector(".js--currency");
const resultElement = document.querySelector(".js--result");
const buttonElement = document.querySelector(".js--form");

{
  const calculate = (amount, currency) => {
    let currencyUSD = 4.18;
    let currencyEUR = 4.47;
    let currencyGBP = 5.19;
    let currencyCHF = 4.61;
    switch (currency) {
      case "USD":
        return amount / currencyUSD;
      case "EUR":
        return amount / currencyEUR;
      case "GBP":
        return amount / currencyGBP;
      case "CHF":
        return amount / currencyCHF;
    }
  };

  const init = () => {
    buttonElement.addEventListener("submit", (e) => {
      e.preventDefault();
      let amount = +inputElement.value;
      let currency = currencyElement.value;
      let result = calculate(amount, currency);
      resultElement.innerText = ` ${result.toFixed(2)} ${currency}`;
    });
  };
  init();
}
