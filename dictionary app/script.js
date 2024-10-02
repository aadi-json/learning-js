const input=document.getElementById("input");
const submitBtn=document.getElementById("submitBtn");
const meaning=document.getElementById("meaning")
// console.log(input,submitBtn);
 
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    getAPI(input.value)
});

const getWordInfo=async(word)=>{
    const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data=await response.json();
console.log(data);

}
