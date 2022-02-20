const API_KEY = "9f9ddb0896628b03fcf9a728839dafef";

function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const str = "\u2103";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#city");
      const weather = document.querySelector("#today-weather");
      const temperature = document.querySelector("#temperature");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temperature.innerText = data.main.temp + str;
    });
}

function geoFail() {
  alert("can't find you...");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
