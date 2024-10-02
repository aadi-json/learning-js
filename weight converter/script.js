const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input",()=>{
    inputValue=input.value*2.25;
  output.innerHTML=inputValue;
})