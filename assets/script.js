var APIKey = "cc850b600769614bab6239ca5af338ce";
//var city;
//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
//fetch(url)

function showWeather(weather) {
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

var city = document.querySelector("input");
var citySearch = document.querySelector("button");
    citySearch.addEventListener("click", function() {
        var cityName = city.value;
        getWeather(cityName);
        city.value = "";
    })

function getWeather(city) {
    var url = "http://api.openweathermap.org/data/2.5/forecast?" + city + "&appid=" + APIKey


    fetch(url)
    .then((response) => response.json())
    .then((data) => showWeather(data));

}
getWeather();

