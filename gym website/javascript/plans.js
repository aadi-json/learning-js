const Name=document.getElementById("name");
const Number=document.getElementById("number");
const Email=document.getElementById("email");
const bookBtn=document.querySelector(".bookBtn");

bookBtn.addEventListener("click",()=>{
    if(Name.value===""||Number.value===""|| Email.value===""){
        alert("please enter all fields")
    }
else{
    alert("please check your mail ")
}
})