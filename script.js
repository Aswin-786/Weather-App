/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
// getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
// }

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
// showWeatherData = (weatherData) => {
//   //CODE GOES HERE
  
// }

const search = document.getElementById('search-id')
const button = document.getElementById('btn')

const place = document.getElementById('place')
const clouds = document.querySelector('.cloud-images')
const type = document.querySelector('.clouds-type')

const temp = document.querySelector('.temp-degree')
const wind = document.getElementById('wind-speed')
const pressure = document.getElementById('pressure-num')
const humidity = document.getElementById('humid')
const img = document.getElementById('img')

button.onclick = () => {
  const city = search.value
  console.log('uoouu')
  console.log(city)
  console.log(typeof city)

  getWeatherData(city)
  place.innerHTML = city.toUpperCase()
}


function getWeatherData(city) {
  const location = city
  console.log({location})

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5b4bee0ba241d092159faf007e166080`
  )
    .then((e) => e.json())
    .then((data) => {
      console.log(data)

      showWeatherData(data)
    })
}

const showWeatherData = (weatherData) => {
  temp.innerHTML = Math.round(weatherData.main.temp - 273.15)
  wind.innerHTML = weatherData.wind.speed
  pressure.innerHTML = weatherData.main.pressure
  humidity.innerHTML = weatherData.main.humidity
  
  const image = weatherData.weather[0].main
  showImage(image,temp)
  console.log(weatherData.weather[0].main)
}

const showImage = (image,temp) => {
  type.innerHTML = image
   
  const check = temp.innerHTML

  if(image == "Haze") {
    img.src = "image/cloud.png"
  }

  if(image == "Clear") {
    img.src = "image/sunny.png"
  }

  if(check <= 0) {
    img.src = "image/snowy.png"
  }
  
}



