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


// form
const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const companyName = document.getElementById("company-name");
const title = document.getElementById("title");
const message = document.getElementById("message");



form.addEventListener("submit", (e)=> {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue =username.value.trim();
  const emailValue = email.value.trim();
  const companyValue = companyName.value.trim();
  const titleValue = title.value.trim();
  const messageValue = message.value.trim();
  
  if(usernameValue === "") {
    setErrorFor(username, "This field is required");
  } else {
    setSuccessFor(username);
  }
  if(emailValue === "") {
    setErrorFor(email, "This field is required");
  } else {
    setSuccessFor(email);
  }
  if(companyValue === "") {
    setErrorFor(companyName, "This field is required");
  } else {
    setSuccessFor(companyName);
  }
  if(titleValue === "") {
    setErrorFor(title, "This field is required");
  } else {
    setErrorFor(title);
  }
  if(messageValue === "") {
    setErrorFor(message, "This field is required");
  } else {
    setSuccessFor(messege);
  }

};

function setErrorFor(input, message) {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
