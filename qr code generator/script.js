const input = document.getElementById("qr-input");
const button=document.getElementById("qr-btn");
const image=document.getElementById("qr-img");

button.addEventListener("click", ()=>{

if(input.value===""){
    alert('enter a value')
    return;
}else{
image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
}
    })