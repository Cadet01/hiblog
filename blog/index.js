const hamburger = document.querySelector(".hamburger");
const navUnorderList = document.querySelector(".navList");
hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navUnorderList.classList.toggle("active");
});
document.querySelectorAll(".navLinks").forEach(n=>n.addEventListener("click", ()=>{
  hamburger.classList.remove("active");
  navUnorderList.classList.remove("active");
}))
