const email = document.querySelector("input[name=user-email]");
const password = document.querySelector("input[name=user-password]");
const submitBtn = document.querySelector("input[type=submit]");

/* 
email.addEventListener("keyup", (e) => {
    console.log(e.target.value);
 })
*/
submitBtn.addEventListener("click", () => {
    const emailText = email.value;
    const userpassword = password.value;

    // DANGER: Do not follow this step for verify the email & password in client site
    if (emailText === 'neloy' && userpassword === "pass") {
        location.href = "bank.html";
    } else {
        alert("your email or password is not match");
    }
})


