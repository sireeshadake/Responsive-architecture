const themeToggle =
document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark"))
{
themeToggle.innerHTML = "☀️";
}
else
{
themeToggle.innerHTML = "🌙";
}

});

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

});
