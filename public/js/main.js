const burguerMenu = document.querySelector(".burguer-menu");
const links = document.querySelector("#links");

burguerMenu.addEventListener("click", (e) => {
    links.classList.toggle("active");
})