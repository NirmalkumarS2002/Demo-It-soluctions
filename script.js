
//Navigation

function toggleMenu() {
   document.querySelector(".menus").classList.toggle("show");
}

//menus
let menuscon = document.querySelector(".menus")
let menu = document.querySelectorAll(".menu")

menu.forEach((item) => {   
   
   item.addEventListener("click", () => {

      menu.forEach((c) => {
         c.style.background = "transparent"
         c.style.color = "black"
          c.style.borderRadius = "0px";
      })
      item.style.background = "#3B82F6"
      item.style.color = "white"
      item.style.borderRadius = "20px";
   })

})


//login
function login() {

   let name = document.querySelector("#username").value.trim();
   let password = document.querySelector("#password").value.trim();

   if (name === "") {
      alert("Please Enter Your Username")
      return;
   }
   if (password === "") {
      alert("Please Enter Your Password")
      return;
   }

   confirm("Login successfull")

   window.location.href = "index.html";
}

//blog page

function openPage() {
   window.location.href = "404.html";
}


//contact page

let subbutton = document.querySelector(".conbutton")

subbutton.addEventListener("click", () => {

   let field1 = document.querySelector(".form1").value.trim();
   let field2 = document.querySelector(".form2").value.trim();
   let field3 = document.querySelector("#select-language").value;
   let field4 = document.querySelector(".form4").value.trim();

   if (field1 === "") {
      alert("Please Enter your Name")
      return;
   }

   if (field2 === "") {
      alert("Please Enter your Email")
      return;
   }

   if (field3 === "") {
      alert("Please Select Services ")
      return;
   }

   if (field4 === "") {
      alert("Please Enter your Feedback")
      return;
   }

   alert("submitted successfully!")

   document.querySelector(".form1").value = "";
   document.querySelector(".form2").value = "";
   document.querySelector("#select-language").selectedIndex = 0;
   document.querySelector(".form4").value = "";


})


let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 2500);



// 


const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const companyInput = document.getElementById("company");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    document.querySelectorAll("small").forEach((item) => {
        item.innerText = "";
    });

    document.querySelectorAll("input, select, textarea").forEach((field) => {
        field.style.borderColor = "#d1d5db";
    });

    if (nameInput.value.trim() === "") {
        showError(nameInput, "Please enter full name.");
        valid = false;
    }

    if (companyInput.value.trim() === "") {
        showError(companyInput, "Please enter company name.");
        valid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, "Please enter a valid work email.");
        valid = false;
    }

    if (subjectInput.value === "") {
        showError(subjectInput, "Please select a subject.");
        valid = false;
    }

    if (messageInput.value.trim().length < 10) {
        showError(messageInput, "Message cannot be empty (min 10 characters).");
        valid = false;
    }

    if (valid) {
        alert("Message sent successfully!");
        form.reset();
    }
});

function showError(input, message) {
    input.style.borderColor = "red";
    input.parentElement.querySelector("small").innerText = message;
}


const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Working");
});



