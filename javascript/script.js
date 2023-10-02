const billAmount = document.getElementById("bill");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const customTip = document.getElementById("custom-tip");

billAmount.addEventListener("keyup", () => {
  totalAmount.innerHTML = parseFloat(billAmount.value).toFixed(2);
})

customTip.addEventListener("keyup", () => {
  tipAmount.innerHTML = parseFloat(customTip.value).toFixed(2);
});






