var onSuccess = function(location) {
    var cityName = location.city.names.en;
    console.log(cityName)
    document.getElementById("searchweather").value = cityName;
};
// information to weather
const apikey = "6022ce9ab84e3f62fc0af510c575c780" ;
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;
const search = document.querySelector("header form input");
const searchbtn = document.querySelector(".btn");
const weatherIcon = document.querySelector(".weatherico img");
async function checkweather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main. temp)+"°C";
    document.querySelector(".max-temp").innerHTML = Math.round(data.main.temp_max) + "°C";
    document.querySelector(".min-temp").innerHTML = Math.round(data.main.temp_min) + "°C /";
    document.querySelector(".humidity").innerHTML = "Humidity : "+data.main.humidity + "% ";
    document.querySelector(".wind-speed").innerHTML ="Wind speed : " + data.wind.speed +" km/h";
    document.querySelector(".wind-deg").innerHTML ="Wind deg : " + data.wind.deg +"°";
    document.querySelector(".sunrise").innerHTML = "Sunrise : " + new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    document.querySelector(".sunset").innerHTML = "Sunset : " + new Date(data.sys.sunset * 1000).toLocaleTimeString() ; 
    document.querySelector(".rainchance").innerHTML = ` Rainfall percentage : ${data['rain'] ? data['rain']['1h'] : 0} %`;
    const pressure = data.main.pressure;
        document.getElementById("pressureValue").innerHTML = `Atmospheric pressure : ${pressure} hPa`;
        document.querySelector(".weathericon img").src=`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        var apiKey = '6022ce9ab84e3f62fc0af510c575c780';
        var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey;
    
        $.getJSON(url, function(data) {
            var forecast = data.list;
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            $('#forecast').empty();
    
            for (var i = 0; i < forecast.length; i += 8) {
                var date = new Date(forecast[i].dt_txt);
                var day = days[date.getDay()];
                var temperature = Math.round(forecast[i].main.temp - 273.15);
                var iconUrl = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';
    
                $('#forecast').append('<div class="day"><div class="date">' + day + '</div><div class="icon"><img src="' + iconUrl + '"></div><div class="temperature">' + temperature + '°C</div></div>');
            }
        });
    
}
searchbtn.addEventListener("click",()=>{
    checkweather(search.value);
});
console.log(searchbtn)


// Weather forecast for the next five days

$(document).ready(function() {
    $('header form .btn').click(function() {
        var city = $('header form input').val();
        checkWeather(city);
    });
});





