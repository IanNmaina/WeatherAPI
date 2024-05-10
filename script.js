const apiKey = 'a139038501cc5ea00a1b2e72b964a948'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

const searchCity = document.getElementById('search-city')
const searchBtn = document.getElementById('search-btn')
const currentWeather = document.getElementById('current-weather')
const currentWeatherIcon = document.getElementById('current-weather-icon')
const currentWeatherTemp = document.getElementById('current-weather-temp')
const currentWeatherDesc = document.getElementById('current-weather-desc')
const forecastContainer = document.getElementById('forecast-container')
searchBtn.addEventListener('click', () => {
const location = locationInput.value
  if (location) {
    getWeatherData(location);
  }
});
function getWeatherData(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const { name, main, weather } = data
      const { temp, humidity, pressure, description } = main
      const { icon, main: weatherMain } = weather[0]
      currentWeather.style.display = 'block'
      currentWeatherIcon.innerHTML = `<img src='http:plsgq@example.com' alt='${weatherMain}'>`
      currentWeatherTemp.innerHTML = `${temp}°C`
      currentWeatherDesc.innerHTML = `${description}`
      forecastContainer.innerHTML = ''
    })
    .catch(error => console.log(error));
}

  
  

  