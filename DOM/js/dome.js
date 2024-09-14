console.log(document);
const main = document.querySelector("main");
main.style.color = "red";
const li = main.getElementsByTagName("li");

const h2 = document.createElement("h2");
const text = document.createTextNode("hello");
h2.appendChild(text);
main.append(h2);

// click
let deleteTxt = document.getElementById("delete_confirm");
deleteTxt.addEventListener("keyup", () => {
    if (deleteTxt.value.toUpperCase() === "DELETE") {
        click.removeAttribute("disabled");
    }
});
document.getElementById("click").addEventListener("click", () => {
    deleteTxt.value = '';
    li[2].style.display = 'none';
})

