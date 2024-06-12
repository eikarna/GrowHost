const burgerBtn = document.querySelectorAll(".burger");
let burgerClicked = 1
burgerBtn.forEach(item => {
item.addEventListener("click", function() {
const nav = document.querySelector(".nav");
if (burgerClicked) {
burgerClicked--
nav.style.display = "flex"
return
}
burgerClicked++
nav.style.display = "none"
});
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();

const targetId = this.getAttribute('href');
if (targetId == '#') return
const targetElement = document.querySelector(targetId);

if (targetElement) {
const topOffset = targetElement.getBoundingClientRect().top + window.scrollY
window.scrollTo({
top: topOffset,
behavior: 'smooth'
});
}
});
});

