let weatherdata;
const apiKey = '64de46471efd9f008084961f16f6f20e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const weatherIcon = document.querySelector('.weather-icon')


loadWeather();
function loadWeather(){
  const searchBox = document.querySelector('.search input');
  const searchBtn = document.querySelector('.search button'); 

  searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
    document.querySelector('.weather').style.display = "block"
  })
}

async function checkWeather(city){
  const response  = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  if(response.status == 404){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  }else{
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg;c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
  
  
    weatherIcon.src = `img/${data.weather[0].main}.png`
  
    if (data.weather[0].main === 'Haze'){
      weatherIcon.src = 'img/Mist.png'
    }

    document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = 'block';
  }
  
}