const celcius=document.querySelector("#celcius");
const kelvin=document.querySelector("#kelvin");
const farenite=document.querySelector("#farenite");

celcius.addEventListener("input",()=>{
    let c = parseInt(celcius.value);
    let f = (c*9/5+32);
    farenite.value=f;
    let k = c+273.15;
    kelvin.value=k;
});

kelvin.addEventListener("input",()=>{
    let k = parseInt(kelvin.value);
    let c = k-273.15;
    celcius.value=c;
    let f= (k-273.15)*9/5+32;
    farenite.value=f;
});

farenite.addEventListener("input",()=>{
    let f = parseInt(farenite.value);
    let c=(f-32)*5/9;
    celcius.value=c;
    let k = (f-32)*5/9+273.15;
    kelvin.value=k;
})