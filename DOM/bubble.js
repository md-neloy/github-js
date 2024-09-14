document.getElementById("section").addEventListener("click", () => {
    console.log("section")
})
document.getElementById("item-2").addEventListener("click", (event) => {
    console.log("item-2")
    event.stopImmediatePropagation();
})
document.getElementById("item-2").addEventListener("click", (event) => {
    console.log("item-2 hello")
})
document.getElementById("ul").addEventListener("click", () => {
    console.log("unorder list")
})