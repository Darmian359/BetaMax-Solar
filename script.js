// Smooth scroll for navigation

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

if(this.hash !== ""){

e.preventDefault()

document.querySelector(this.hash)
.scrollIntoView({
behavior:"smooth"
})

}

})

})

const slides = document.querySelectorAll(".slide");

let index = 0;

function showSlide(){

slides.forEach(slide=>{
slide.classList.remove("active");
});

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(showSlide,3000);
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".process-content");

tabs.forEach(tab => {

tab.addEventListener("click", () => {

tabs.forEach(btn => btn.classList.remove("active"));
contents.forEach(content => content.classList.remove("active"));

tab.classList.add("active");

const target = tab.getAttribute("data-target");

document.getElementById(target).classList.add("active");

});

});


  const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});