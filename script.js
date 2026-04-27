
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

