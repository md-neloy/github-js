const depositefield = document.getElementById("deposite");
const withdrawfield = document.getElementById("withdraw");
const totalbalance = document.getElementById("totoalBalance");
const depositeAmount = document.querySelector("input[name=depositemoney]");
const withdrawAmount = document.querySelector("input[name=withdrawmoney]");
const depositbtn = document.getElementById("depositbtn");
const withdrawbtn = document.getElementById("withdrawbtn");


// deposite money calculation
depositbtn.addEventListener("click", () => {
    depositefield.innerText = parseFloat(depositefield.innerText) + parseFloat(depositeAmount.value);
    totalbalance.innerText = parseFloat(totalbalance.innerText) + parseFloat(depositeAmount.value);

})
// withdraw money calculation
withdrawbtn.addEventListener("click", () => {
    withdrawfield.innerText = parseFloat(withdrawfield.innerText) + parseFloat(withdrawAmount.value);
    totalbalance.innerText = parseFloat(totalbalance.innerText) - parseFloat(withdrawAmount.value);
})
