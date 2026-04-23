
function toggleMenu() {
   document.querySelector(".menus").classList.toggle("show");
}

function login() {
   confirm("Login successfull")
}


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