const btnElement = document.querySelector("#btn");
const mealCostElement = document.querySelector("#meal-cost");
const tipPercentElement = document.querySelector("#tip-percentage");
const amountSpan = document.querySelector("#amount");
const totalSpan = document.querySelector("#total");

btnElement.addEventListener("click", calculateTip);
function calculateTip(e) {
  e.preventDefault();
  let mealCost = parseFloat(mealCostElement.value);
  let tipPercent = parseFloat(tipPercentElement.value) * 0.01;
  let totalCost = mealCost + mealCost * tipPercent;
  amountSpan.innerHTML = mealCost;
  totalSpan.innerHTML = totalCost;
}
