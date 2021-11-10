const currencyElementOne = document.getElementById("currency-one");
const currencyElementTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  currency_one = currencyElementOne.value;
  currency_two = currencyElementTwo.value;
  fetch(
    ` https://v6.exchangerate-api.com/v6/c0ef048e1ba4b0da427c184d/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currency_two];
      console.log(rate);
      rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}

function swapingValues() {
  const temp = currencyElementOne.value;
  currencyElementOne.value = currencyElementTwo.value;
  currencyElementTwo.value = temp;
  calculate();
}

currencyElementOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyElementTwo.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);
swap.addEventListener("click", swapingValues);
