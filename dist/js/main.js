// NavBar Toggle:

const navBar = document.querySelector(".navbar__mobile");
const closeBtn = document.querySelector(".closeBtn");
const openBtn = document.querySelector(".openBtn");

openBtn.addEventListener("click", () => {
	navBar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	navBar.classList.remove("active");
});

window.onscroll = () => {
	navBar.classList.remove("active");
};
