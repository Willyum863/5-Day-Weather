//var APIKey = "cc850b600769614bab6239ca5af338ce";
//var city;
//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
//fetch(queryURL)

function renderWeather(weather) {
    console.log(weather);
    var resultsContainer = document.querySelector("#weather-results");
    //temp, city, wind, humidity, icon
    var city = document.createElement('h2');
    city.textContent = weather.name;
    resultsContainer.append(city);

    var temp = document.createElement('p');
    temp.textContent = "Temp: " + weather.main.temp + " F";
    resultsContainer.append(temp);

    var humidity = document.createElement('p');
    humidity.textContent = "Humidity: " + weather.main.humidity + " %";
    resultsContainer.append(humidity);

    var wind = document.createElement('p');
    wind.textContent = "Wind: " + weather.wind.speed + " mph";
    resultsContainer.append(wind);

    
}

function fetchWeather(query) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=cc850b600769614bab6239ca5af338ce"
    fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data));

}
fetchWeather();

