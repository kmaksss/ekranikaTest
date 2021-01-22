export default function(target) {
  const calc = document.querySelector(target)
  const priceInput = calc.querySelector('#price');
  const periodInput = calc.querySelector('#period');
  const percentInput = calc.querySelector('#percent');

  const summInner = calc.querySelector('#calc-summ');
  const overpaymentInner = calc.querySelector('#overpayment');
  const percentInner = calc.querySelector('#percentInner');
  const periodInner = calc.querySelector('#periodInner');

  const calculateBtn = calc.querySelector('#calculateBtn')

  const tariff = 10.9;

  let price, period, percent;

  launch()
  calculateBtn.addEventListener('click', launch)

  function launch() {
    getValues();
    if(!price) return console.error(`Введены некорректные данные`);
    let overpayment = calculator(price, period, percent, tariff);
    innerSumm(price, overpayment, percent, period);
  }

  function getValues() {
    price = +priceInput.value.replace(/\s+/g, '');
    period = +periodInput.value;
    percent = +percentInput.value;
  }

  function calculator(price, period, percent, tariff) {
    const creditValue = price - (price / 100 * percent);
    return Math.round(((creditValue / 100 * tariff) / 12) * period)
  }

  function innerSumm(number, overpayment, percent, period) {
    overpaymentInner.textContent = `${prettify(overpayment)} ₽`
    summInner.textContent = `${prettify(number + overpayment)} ₽`
    percentInner.textContent = `${percent}%`;
    periodInner.textContent = `${period}`
  }

  function prettify(num) {
    let n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }

}