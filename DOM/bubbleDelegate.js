// const items = document.getElementsByClassName("item");
// for (let item of items) {
//   item.addEventListener("click", (event) => {
//     event.target.parentNode.removeChild(event.target);
//   });
// }
const section = document.getElementById("delegate");
const listcontainer = section.querySelector("#list-container");
const btn = section.querySelector("#btn");

listcontainer.addEventListener("click", (e) => {
    e.target.parentNode.removeChild(e.target);
})
btn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "brand new item added";
    listcontainer.appendChild(li);
})