const inputfield = document.getElementById("input");
const outputfield = document.getElementById("output");

inputfield.addEventListener("input", () => {
  console.log(inputfield.value);
  let password = inputfield.value;

  if(password.length<8)
    {
    outputfield.innerText = "Password must be at least 8 characters long";
    outputfield.style.color="red";
  }
  else if(password.search(/[a-z]/==-1))
    {
    outputfield.innerHTML = "Password must be conatin a lowecase letter";
    outputfield.style.color="red";
  }
  else if(password.search(/[A-Z]/==-1))
    {
    outputfield.innerHTML = "Password must be conatin a Uppercaseletter";
    outputfield.style.color="red";
  }else{
    outputfield.innerHTML = " valid Password";
    outputfield.style.color="green";
  }
});
