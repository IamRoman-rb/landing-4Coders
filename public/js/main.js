const burguerMenu = document.querySelector(".burguer-menu");
const links = document.querySelector("#links");

burguerMenu.addEventListener("click", (e) => {
    links.classList.toggle("active");
})


//Pre-loader
const preLoader = document.querySelector(".pre-loader");
window.addEventListener("load", e => {
    setTimeout(() => {
        preLoader.style.opacity = "0";
        preLoader.style.zIndex = "0"    
    },
        1000)
});