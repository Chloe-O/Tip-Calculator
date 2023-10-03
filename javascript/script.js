const billInput = document.getElementById("bill");
const customTipInput = document.getElementById("custom-tip");
const peopleNumInput = document.getElementById("people-num");
const tipAmountDisplay = document.getElementById("tip-amount");
const totalAmountDisplay = document.getElementById("total-amount");
let clearFormBtn = document.getElementById("clear-form");

// let Inputs = document.querySelectorAll(".input");

billInput.addEventListener("change", () => {
  if (customTipInput.value != "" && peopleNumInput.value != "") {
    console.log("hello");
  }
});

customTipInput.addEventListener("change", () => {
  if (billInput.value != "" && peopleNumInput.value != "") {
    console.log("world");
  }
});

// Inputs.forEach((i) => {
//   i.addEventListener("click", () => {
//     calculateTotal();
//   });
// });

// function calculateTotal() {
//   let customTip;
//   let billAmount;
//   let peopleNum;
//   let total;

//   customTipInput.addEventListener("change", () => {
//     customTip = parseFloat(customTipInput.value).toFixed(2);
//   });

//   billInput.addEventListener("change", () => {
//     billAmount = billInput.value;
//   });

//   peopleNumInput.addEventListener("change", () => {
//     peopleNum = peopleNumInput.value;
//   });

// }

function resetForm() {
  billInput.value = "";
  customTipInput.value = "";
  peopleNumInput.value = "";
  tipAmountDisplay.innerHTML = "0.00";
  totalAmountDisplay.innerHTML = "0.00";
}

clearFormBtn.addEventListener("click", resetForm);
