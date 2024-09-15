const depositefield = document.getElementById("deposite");
const withdrawfield = document.getElementById("withdraw");
const totalbalance = document.getElementById("totoalBalance");
const depositeAmount = document.querySelector("input[name=depositemoney]");
const withdrawAmount = document.querySelector("input[name=withdrawmoney]");
const depositbtn = document.getElementById("depositbtn");
const withdrawbtn = document.getElementById("withdrawbtn");

// deposite money calculation
depositbtn.addEventListener("click", () => {
  if (parseFloat(depositeAmount.value) <= 0) {
      alert("you enter amount is less then zero");
  } else {
    depositefield.innerText =
      parseFloat(depositefield.innerText) + parseFloat(depositeAmount.value);
    totalbalance.innerText =
      parseFloat(totalbalance.innerText) + parseFloat(depositeAmount.value);
  }
  depositeAmount.value = "";
});
// withdraw money calculation
withdrawbtn.addEventListener("click", () => {
  if (parseFloat(withdrawAmount.value) > parseFloat(totalbalance.innerText)) {
    alert("you have not enough money");
  } else {
    withdrawfield.innerText =
      parseFloat(withdrawfield.innerText) + parseFloat(withdrawAmount.value);
    totalbalance.innerText =
      parseFloat(totalbalance.innerText) - parseFloat(withdrawAmount.value);
  }
  withdrawAmount.value = "";
});

// go to the previous page
const previouspage = document.getElementById("previouspage");
previouspage.addEventListener("click", () => {
    location.href = "index.html";
})
