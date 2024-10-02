const inputName=document.getElementById("username");
const inputPassword=document.getElementById("pass");
const inputNumber=document.getElementById("num");
const inputEmail=document.getElementById("email");
const submitBtn=document.getElementById("btn");
const error=document.getElementById("error");
const passError=document.getElementById("passworderror");
const numError=document.getElementById("numerror");
const emailError=document.getElementById("emaileerror");
const correctForm=document.getElementById("correctform");
// console.log(name,password,number,email);

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const username=inputName.value;
    const password=inputPassword.value;
    const number=inputNumber.value;
    const email=inputEmail.value;


    if(username===""){
        // alert("please enter your username!!")
        error.classList.add('red');
        error.innerHTML="please enter your username!!";
    }else{
         error.innerHTML="username is correct"
         error.classList.add('green');
    }

    if(password==""||password.length<=8||password.length>=15){
        // alert("please enter your  password!!")
       passError.classList.add('red');
       passError.innerHTML="please enter password with 8 letters"
    }else{
       passError.classList.add("green")
       passError.innerHTML="password is correct"
    }

    if(number.length==10){
         numError.classList.add("green")
        numError.innerHTML="number is correct"
    }else{
         numError.classList.add('red');
        numError.innerHTML="please enter your 10 digit mobile number"
    }

    if(email==="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"){
        emailError.classList.add("green")
        emailError.innerHTML="email is correct"
    }
    else{
         emailError.classList.add("red")
        emailError.innerHTML="please enter correct email"
    }

    

})
