//nav styling
const hamburger = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");
const navLink = document.querySelector(".nav-link");
const layover = document.querySelector(".overlay");
const body = document.querySelector("body");
 (function(){
   hamburger.addEventListener("click",()=>{
     layover.style.display="block";
     navLink.style.transform="translate(0)";
     closeIcon.classList.add("show");
     hamburger.style.display="none";
     body.style.overflow = "hidden";

   })
   closeIcon.addEventListener("click",()=>{
    layover.style.display="none";
    navLink.style.transform="translate(120%)";
    closeIcon.classList.remove("show");
    hamburger.style.display="block";
    body.style.overflow = "auto";
   });
    
 })();

const contact = document.querySelectorAll(".contact");
for(let i=0; i<contact.length; i++) {
  contact[i].addEventListener("click",()=>{
  location.href="./contact.html";
});
}