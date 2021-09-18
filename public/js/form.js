const inputPassword = Array.from(document.querySelectorAll(".password"));
const btnEye = Array.from(document.querySelectorAll(".btn-eye"));
const p = document.querySelectorAll(".placeholder");

btnEye.forEach((btn, index) => btn.addEventListener("click", e => {
    e.preventDefault();
    inputPassword[index].getAttribute("type") == "password" ? inputPassword[index].setAttribute("type", "text") : inputPassword[index].setAttribute("type", "password")
}))

const inputs = document.querySelectorAll(".input-float");

inputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
        const target = e.target;
        const value = target.value;
        const label = target.parentElement;
        if (value.length > 0 ) {
            label.classList.add("complete");
        }else{
            label.classList.remove("complete")
        }
    })
    input.addEventListener("focus", (e) => {
        const target = e.target;
        const value = target.value;
        const label = target.parentElement;
        if (value.length > 0) {
            label.classList.add("complete")
        }
    })
})