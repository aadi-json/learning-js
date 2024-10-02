const input=document.querySelector("#input");
const output=document.querySelector("#output");
const outputtext=document.querySelector("#outputtext");
const button=document.querySelector("#btn");


console.log(input,output,outputtext);

button.addEventListener("click",()=>{
    if(input.value==""){
        alert("please enter your text");
    }else{
        const val = input.value;
        let count =0;
        for(i=0;i<val.length;i++){
            if(val[i]===("a","A")||val[i]===("e","E")||val[i] ===("i","I")||val[i] ===("0","O") ||val[i]===("u","U")){
                count++;
            }
        }
        outputtext.innerHTML=  `the number of vowels are : ${count}`;
    }
});