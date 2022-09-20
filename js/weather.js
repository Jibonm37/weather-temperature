const loadWeather = () => {

const input = document.getElementById('input');
const inputText = input.value;
input.value='';
const url= `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=bdefcc4275dd0fb912cea5eebd469df7`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))

}


const displayWeather = weather => {
    
    const temp =weather.main.temp - 273.15;
    const roundedtemp = Math.round(temp);
    const desc = weather.weather[0].description;
    // const img=  `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const weatherDiv = document.getElementById('container');
    weatherDiv.textContent='';
    const div = document.createElement('div');
    div.innerHTML = `
    
    <div class="weather-status text-white text-center">
    <img class="" width="200px" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="">
    <h1>${weather.name}</h1>
    <h3><span>${roundedtemp}</span>&deg;C</h3>
    <h1 class="lead">${desc}</h1>
    </div>

    `
    weatherDiv.appendChild(div)
}