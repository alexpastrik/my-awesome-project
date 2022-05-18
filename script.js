let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city");
city = city.trim();
city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let cTemp = Math.round(temperature);
  let fTemp = Math.round((temperature * 9) / 5 + 32);
  alert(
    `It is currently ${cTemp}°C (${fTemp}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

let currentTime = new Date();
console.log(currentTime);
console.log(currentTime.getMilliseconds());
console.log(currentTime.getDay());
console.log(currentTime.getFullYear());
console.log(currentTime.getMonth());

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form");
  console.log(searchInput.value);
  if (searchInput.value) {
    search.innerHTML = `Searching for ${searchInput.value}`;
  } else {
    search.innerHTML = null;
    alert("Search your city");
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchInput);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);

  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${response.data.main.temp}°C`;
}

let apiKey = "e29b8864f34959087569c0fc55a5191a";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric";

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
