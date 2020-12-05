"use strict";

/* api.openweathermap.org/data/2.5/weather?q={city name}&appid-{your api key} */
var weatherApi = {
  key: "f1a425bc5e87d67911cfb228851d6ba7",
  //  baseUrl: "https://home.openweathermap.org/api_keys"
  baseUrl: "https://api.openweathermap.org/data/2.5/weather"
};
var searchInputBox = document.getElementById('input-box'); // Event Listener Function on keypress

searchInputBox.addEventListener('keypress', function (Event) {
  if (Event.keycode == 13) {
    // console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display = "block";
  }
}); // Get Weather Report

function getWeatherReport(city) {
  fetch("".concat(weatherApi.baseUrl, "?q=").concat(city, "&appid=").concat(weatherApi.key, "&units=metric")).then(function (weather) {
    return weather.json();
  }).then(showWeatherReport);
} //Show Weather Report


function showWeatherReport(weather) {
  //  console.log(weather);
  var city = document.getElementById('city');
  city.innerText = "".concat(weather.name, ", ").concat(weather.sys.country);
  var temperature = document.getElementById('temp');
  temperature.innerHTML = "".concat(Math.round(weather.main.temp), "&deg;C");
  var minMaxTemp = document.getElementById('min-max');
  minMaxTemp.innerHTML = "".concat(Math.floor(weather.main.temp_min), "&deg;C (min)/ ").concat(Math.ceil(weather.main.temp_max), "&deg;C (max) ");
  var weatherType = document.getElementById("weather");
  weatherType.innerText = "".concat(weather.weather[0].main);
  var date = document.getElementById('date');
  var todayDate = new Date();
  date.innerText = dateManage(todayDate);

  if (weatherType.textContent == 'Clear') {
    document.body.style.backgroundImage = "url('demoClear.jpg)";
  } else if (weatherType.textContent == 'Cloudy') {
    document.body.style.backgroundImage = "url(`demo.Cloudy.jpg)";
  } else if (weatherType.textContent == 'Raining') {
    document.body.style.backgroundImage = "url(`demo.Raining.jpg)";
  } else if (weatherType.textContent == 'Thunderstorm') {
    document.body.style.backgroundImage = "url(`demo.Thunderstorm.jpg)";
  } else if (weatherType.textContent == 'Snowing') {
    //Date Manage
    var _dateManage = function _dateManage(dateArg) {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var year = dateArg.getFullYear();
      var month = months[dateArg.getMonth()];
      var date = dateArg.getDate();
      var day = days[dateArg.getDay()];
      return "".concat(date, " ").concat(month, " (").concat(day, "), ").concat(year);
    };

    document.body.style.backgroundImage = "url(`demo.Snowing.jpg)";
  }
}