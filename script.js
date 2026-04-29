
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


// 


const menus = document.querySelectorAll(".menu");

const currentPage = window.location.pathname.split("/").pop();

menus.forEach((menu) => {

    const menuPage = menu.getAttribute("href");

    if (menuPage === currentPage || (currentPage === "" && menuPage === "index.html")) {
        menu.classList.add("active");
    }

});

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

//form page

const submit = document.querySelector("#sub-btn");


submit.addEventListener("click", (e) => {

    e.preventDefault();

    const nameInput = document.querySelector("#name").value.trim();
    const companyInput = document.querySelector("#company").value.trim();
    const emailInput = document.querySelector("#email").value.trim();
    const subjectInput = document.querySelector("#subject").value;
    const messageInput = document.querySelector("#message").value.trim();

    if (nameInput === "") {
        alert("Please Enter Your Name")
        return;
    }

    if (companyInput === "") {
         alert("Please Enter Your Name")
        return;
    }

    if (emailInput === "") {
         alert("Please Enter Your Email")
        return;
    }

    if (subjectInput === "") {
         alert("Please Select Subject")
        return;
    }

    if (messageInput === "") {
         alert("Please Enter Your Message")
        return;
    }


    alert("Submitted Successfully!");

    document.querySelector("#name").value = "";
    document.querySelector("#company").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#subject").selectedIndex = 0;
    document.querySelector("#message").value = "";

});





