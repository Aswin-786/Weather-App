// accessing all the id's and classes
const search = document.getElementById('search-id')
const button = document.getElementById('btn')

const place = document.getElementById('place')
const clouds = document.querySelector('.cloud-images')
const type = document.querySelector('.clouds-type')

const min = document.getElementById('min-temp')
const max = document.getElementById('max-temp')


const temp = document.querySelector('.temp-degree')
const wind = document.getElementById('wind-speed')
const pressure = document.getElementById('pressure-num')
const humidity = document.getElementById('humid')
const img = document.getElementById('img')

// action happens when button click
button.onclick = () => {
  const city = search.value
  getWeatherData(city)
  place.innerHTML = city.toUpperCase()
}

// accessing data from API
const getWeatherData = (city) => {
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

// updating to DOM
const showWeatherData = (weatherData) => {
  temp.innerHTML = Math.round(weatherData.main.temp - 273.15)
  wind.innerHTML = weatherData.wind.speed
  pressure.innerHTML = weatherData.main.pressure
  humidity.innerHTML = weatherData.main.humidity
  min.innerHTML = Math.round(weatherData.main.temp_min - 273.15)
  max.innerHTML = Math.round(weatherData.main.temp_max - 273.15)

  const image = weatherData.weather[0].main
  showImage(image,temp)
  console.log(weatherData.weather[0].main)
}

// updating the cloud image
const showImage = (image,temp) => {
  type.innerHTML = image
   
  const check = temp.innerHTML

  if(image == "Haze") {
    img.src = "image/cloud.png"
  }

  if(image == "Clear") {
    img.src = "image/sunny.png"
  } 

  if(image == "Clouds") {
    img.src = "image/cloud.png"
  }

  if(check <= 0) {
    img.src = "image/snowy.png"
  }

  if(check >= 20) {
    img.src = "image/sunny.png"
  }
  
}



