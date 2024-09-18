// Area field for calculate Geometry
const calculateAre = document.querySelector("#calculateArea");

// for triangle calculate
const b = document.getElementById("TriangleBase");
const h = document.getElementById("TriangleHeight");

function calculateTriangleArea() {
  let base = parseFloat(b.value);
  let height = parseFloat(h.value);
  let result = 0.5 * base * height;
  calculateAre.innerText = `Triangle area is ${result}`;
  setTimeout(() => {
    b.value = "";
    h.value = "";
  }, 1000);
}

//for rectangel area calculate
function getwidth() {
     return parseFloat(document.getElementById("rectangleWidth").value);
}
function getlength() {
    return parseFloat(document.getElementById("rectangleLength").value);
}
function calculateRectangleArea(rectangleWidth, rectangleLength) {
    calculateAre.innerText = `Rectangle area is ${rectangleWidth * rectangleLength}`;
    setTimeout(() => {
        document.getElementById("rectangleWidth").value = "";
        document.getElementById("rectangleLength").value = "";
    }, 1000);
}
