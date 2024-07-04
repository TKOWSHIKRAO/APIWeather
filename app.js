const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weather-info');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  try {
    const apiKey = 'c22f540d8d7576b01e9eeae0b459842c';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    if (response.ok) {
      showWeather(data);
    } else {
      throw new Error('City not found');
    }
  } catch (error) {
    alert(error.message);
  }
}

function showWeather(data) {
  cityName.textContent = data.name;
  temperature.textContent = `${data.main.temp}°C`;
  description.textContent = data.weather[0].description;
  weatherInfo.classList.remove('hidden');
}