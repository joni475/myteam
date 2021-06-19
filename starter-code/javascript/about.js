//nav styling
const hamburger = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");
const navLink = document.querySelector(".nav-link");
const layover = document.querySelector(".overlay");

 (function(){
   hamburger.addEventListener("click",()=>{
     layover.style.display="block";
     navLink.style.transform="translate(0)";
     closeIcon.classList.add("show");
     hamburger.style.display="none";
   })
   closeIcon.addEventListener("click",()=>{
    layover.style.display="none";
    navLink.style.transform="translate(120%)";
    closeIcon.classList.remove("show");
    hamburger.style.display="block";
   });
    
 })();

const contact = document.querySelectorAll(".contact");
for(let i=0; i<contact.length; i++) {
  contact[i].addEventListener("click",()=>{
  location.href="./contact.html";
});
}