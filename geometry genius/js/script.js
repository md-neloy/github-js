// for triangle calculate
const b = document.getElementById("TriangleBase");
const h = document.getElementById("TriangleHeight");
const calculateBtn = document.getElementById("calculateBtn");
const calculateAre = document.getElementById("calculateArea");
calculateBtn.addEventListener("click", () => {
    let base = parseFloat(b.value);
    let height = parseFloat(h.value);
    let result = 0.5 * base * height;
    calculateAre.innerText = `Triangle area is ${result}`;
    setTimeout(() => {
        b.value = "";
        h.value = "";
    }, 1000);
    
})