const inputBox=document.querySelector(".input-box");
const searchBtn=document.getElementById("searchBtn");
const whether_img=document.querySelector(".whether-img");
const tempreture=document.querySelector(".tempreture");
const description=document.querySelector(".description");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind_speed");
const location_not_found=document.querySelector(".location_not_found");
const weather_body=document.querySelector(".whether-body")
// console.log(inputBox,searchBtn,whether_img,tempreture,description,humidity,wind_speed);

async function checkWhether(city){
    const api_key="be25510d0dfe9c8a286ade8ae3fc9243";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const whether_data = await fetch(`${url}`).then(response=>
        response.json())
        
        // console.log(whether_data);
        
        if(whether_data.cod==='404'){
           location_not_found.style.display="flex";
           weather_body.style.display="none";
            return;
        }
        location_not_found.style.display="none";
        weather_body.style.display="flex";

        tempreture.innerHTML = `${ Math.round(whether_data.main.temp-273.15)}°C`;

        description.innerHTML=`${whether_data.weather[0].description}`

        humidity.innerHTML=`${whether_data.main.humidity}%`

        wind_speed.innerHTML=`${whether_data.wind.speed}Km/H`

        switch(whether_data.weather[0].main){
                case 'Clouds':
                whether_img.src="images/cloud.png";
                break;

                case 'Clear':
                whether_img.src="images/clear.png";
                break;

                case 'Mist':
                whether_img.src="images/mist.png";
                break;

                case 'Rain':
                whether_img.src="images/rain.png";
                break;

                case 'Snow':
                whether_img.src="images/snow.png";
                break;

        }

}


searchBtn.addEventListener("click",()=>{
    checkWhether(inputBox.value);

});
