
const base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"

const dropdowns = document.querySelector(".dropdown select");

let i =0;
for(let select of dropdowns){
    for(currCode of countryList){
        let newOption = document.createElement("option");
        newOption.value=currCode;
        select.append(newOption);
        
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected"
        } 
        else(select.name==="to" && currCode==="INR")
        {
            newOption.selected="selected"
    }
    select.append (newOption);
}

select.addEventListener('change',(evt) => {
    updateFlag(evt.target);
});
}

const updateFlag=(element) =>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc="https://flagsapi.com/IN/flat/64.png";
    let img=element.parentElement.querySelector("img")
    img.src=newSrc;
}



