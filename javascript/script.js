const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const customTip = document.getElementById("custom-tip");

customTip.addEventListener("keyup", () => {
  tipAmount.innerHTML = parseFloat(customTip.value).toFixed(2);
});

console.log(typeof customTip.innerHTML);
