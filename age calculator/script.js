const date=document.getElementById("date");
const button=document.getElementById("btn");
const age=document.getElementById("age");

button.addEventListener("click",()=>{
    if(date.value===""){
        alert("Please enter your date of birth");
    }else{

        //dob year
        const dob = new Date(date.value);
        // console.log("dob",dob);

        const dob_year=dob.getFullYear();
        // console.log("dob year:",dob_year);

        //current date

        const now=new Date()
        // console.log("now",now);

        const now_year=now.getFullYear();
        // console.log("now year:",now_year);

        const age=now_year-dob_year;
        alert(`your age is :${age}`)
    }
})