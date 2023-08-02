const search = document.getElementById('search-id');
const button = document.getElementById('btn');
const place = document.getElementById('place');
const clouds = document.querySelector('.cloud-image');
const type = document.querySelector('.clouds-type');
const min = document.getElementById('min-temp');
const max = document.getElementById('max-temp');
const temp = document.querySelector('.temp-degree');
const wind = document.getElementById('wind-speed');
const pressure = document.getElementById('pressure-num');
const humidity = document.getElementById('humid');
const img = document.getElementById('img');

// Action happens when button clicked
button.addEventListener('click', () => {
  const city = search.value;
  getWeatherData(city);
});

// Accessing data from API
const getWeatherData = async (city) => {
  try {
    const location = city;
    console.log({ location });

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5b4bee0ba241d092159faf007e166080`
    );

    if (!response.ok) {
      throw new Error('City not found.');
    }

    const data = await response.json();
    console.log(data);
    showWeatherData(data);
  } catch (error) {
    console.log(error);
  }
};

// Updating the DOM
const showWeatherData = (weatherData) => {
  const temperatureCelsius = Math.round(weatherData.main.temp - 273.15);
  temp.innerHTML = temperatureCelsius;
  wind.innerHTML = weatherData.wind.speed;
  pressure.innerHTML = weatherData.main.pressure;
  humidity.innerHTML = weatherData.main.humidity;
  min.innerHTML = Math.round(weatherData.main.temp_min - 273.15);
  max.innerHTML = Math.round(weatherData.main.temp_max - 273.15);
  place.innerHTML = weatherData.name.toUpperCase();

  const image = weatherData.weather[0].main;
  showImage(image, temperatureCelsius);
  console.log(weatherData.weather[0].main);
};

// Updating the cloud images
const showImage = (image, temp) => {
  type.innerHTML = image;

  if (image === 'Haze' || image === 'Clouds') {
    img.src = 'image/cloud.png';
  } else if (image === 'Clear') {
    img.src = 'image/sunny.png';
  }

  if (temp <= 0) {
    img.src = 'image/snowy.png';
  } else if (temp >= 20) {
    img.src = 'image/sunny.png';
  }
};
