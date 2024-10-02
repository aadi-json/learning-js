const submitBtn=document.getElementById("submitbtn");
const nameError=document.getElementById("nameError");
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
// console.log(name,nameError,submitBtn);


submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if(validateName() && validateEmail() &&validatePassword()){
        alert("form submitted successfully");
    }
});

function validateName(){ 
    let name=document.getElementById("name").value;

    if(name.length==0){
        nameError.innerHTML="please enter your name";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        	nameError.innerHTML="write your full name";
            return false;
    }
    nameError.innerHTML="";
    return true;
}

function validateEmail(){ 
    let email=document.getElementById("email").value;

    if(email.length==0){
        emailError.innerHTML="please enter your email";
        emailError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        	emailError.innerHTML="write your email";
            emailError.previousElementSibling.classList.add("fa-xmark");
            return false;
    }
    emailError.innerHTML="";
    emailError.previousElementSibling.classList.add("fa-check");
    return true;
}
function validatePassword(){
    let password = document.getElementById('password').value;

    if(password.length == 0){
        passError.innerHTML = "Password is required";
        return false;
    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
        return false;
    }
    passError.innerHTML = "";
    return true;
}
