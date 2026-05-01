// login box section

let logacc = document.querySelector(".login-account")
let crtacc = document.querySelector(".create-account")

crtacc.addEventListener("click", (e) => {
    e.preventDefault();
    let logbox1 = document.querySelector(".log-main-box")
    logbox1.style.display = "none"
       logacc.style.background = "none"
logacc.style.color = "black"
    


    let logbox2=document.querySelector(".log-main-box2")
logbox2.style.display="grid"
crtacc.style.background = "#3B82F6"
crtacc.style.color = "white"

})


logacc.addEventListener("click", (e) => {
    e.preventDefault();
    let logbox1 = document.querySelector(".log-main-box")
    logbox1.style.display = "flex"
    logacc.style.background = "#3B82F6"
logacc.style.color = "white"

    let logbox2=document.querySelector(".log-main-box2")
logbox2.style.display="none"
crtacc.style.background = "none"
crtacc.style.color = "black"
})



//  //login account


let loginbutton=document.querySelector(".log-btn")

loginbutton.addEventListener("click",(e)=>{
    e.preventDefault();

let logname=document.querySelector(".login-name-field").value.trim();
let email=document.querySelector(".login-email-field").value.trim();
let logcheck=document.querySelector(".login-checkbox").checked;
let errname=document.querySelector(".errname")
let errmail=document.querySelector(".errmail")


 errname.innerText=""
 errmail.innerText=""

if(logname===""){
    errname.innerText="Please Enter Your Name"
}

if(email===""){
    errmail.innerText="Please Enter Your Email"
    return;
}

if (!logcheck) {
    alert("Please accept terms & conditions")
}

alert("Login success full")

document.querySelector(".login-name-field").value=""
document.querySelector(".login-email-field").value=""
document.querySelector(".login-checkbox").checked=false;
})

//  create accout



let createbutton=document.querySelector(".cre-btn")

createbutton.addEventListener("click",(e)=>{
    e.preventDefault();

    let CreateName=document.querySelector(".createName").value.trim();
    let CreateEmail=document.querySelector(".createEmail").value.trim();
    let CreatePass=document.querySelector(".createPass").value.trim();
    let ConfirmPass=document.querySelector(".confirmPass").value.trim();
    let CreateError=document.querySelectorAll(".createerror")

    CreateError.forEach((item)=>{

      item.innerText="" 

     })

       let isValid = true;

     

    if(CreateName===""){
         CreateError[0].innerText="Enter Your Name"
         isValid = false;
    }

    if(CreateEmail===""){
        CreateError[1].innerText="Please Enter a valid Email"
        isValid = false;
    }

       if(CreatePass===""){
        CreateError[2].innerText="Password must be at least 8 characters."
       isValid = false;
    }

       if(ConfirmPass!==CreatePass){
        CreateError[3].innerText="Passwords do not match."
    isValid = false;
    }

   if (isValid) {
        alert("Account created successfully")

        document.querySelector(".createName").value = ""
        document.querySelector(".createEmail").value = ""
        document.querySelector(".createPass").value = ""
        document.querySelector(".confirmPass").value = ""
    }
})


 //claint box

 let claintbox=document.querySelectorAll(".claint-box")

  claintbox.forEach((claint)=>{
     claint.addEventListener("click",()=>{

            claintbox.forEach((box) => {
            box.style.borderColor = "#ccc"
        })

    claint.style.borderColor="#3B82F6";
 })
})

