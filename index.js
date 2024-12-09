console.log("hello");
const apiKey= "4c96d4a8134ec480a58e4d5cdb5de5ed";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    const weatherIcon = document.querySelector(".weather-icon"); 
    const error = document.querySelector(".error"); 

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();


    console.log(data);

    if(data.cod == "404"){ 
        error.style.display = "block";
        document.querySelector(".weather").style.display="none";
    }

    else{

        error.style.display = "none";
        document.querySelector(".weather").style.display="block";
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed +" Km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }        
    }

}

searchBtn.addEventListener( "click", ()=>{
    if(searchBox.value == "") return;
    checkWeather(searchBox.value);
})

// searchBtn.addEventListener("click", checkWeather(searchBox.value));

