'use strick'

var data;

function callWeatherAPI() {
    var domain = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var APIID = '&units=metric&APPID=9936c568bdbe8c69d5175e0469c66f49';
    //var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9936c568bdbe8c69d5175e0469c66f49';

    var cityNameValue = document.getElementById('cityName').value;
    if (cityNameValue.trim() == '') {
        alert('City can\'t be empty');
        document.getElementById('cityName').focus();
        return;
    }

    var url = domain + cityNameValue.trim() + APIID;
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', url, true);

    request.onload = function () {
        // Begin accessing JSON data here
        data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            document.getElementById('cityNameTitle').innerHTML = 'Weather Info: ' + cityNameValue.trim();
            document.getElementById('tempValue').innerHTML = data.main.temp;
            document.getElementById('tempMaxValue').innerHTML = data.main.temp_max;
            document.getElementById('tempMinValue').innerHTML = data.main.temp_min;
            document.getElementById('humidityValue').innerHTML = data.main.humidity;
            document.getElementById('pressureValue').innerHTML = data.main.pressure;
            document.getElementById('feelsLikeValue').innerHTML = data.main.feels_like;
            document.getElementById('latitudeValue').innerHTML = data.coord.lat;
            document.getElementById('longitudeValue').innerHTML = data.coord.lon;
            document.getElementById('cityName').value = '';
        } else {
            console.log('error');
            alert('Error' );
        }
    }
    // Send request
    request.send();
}

function displayDetails() {
    document.getElementById('temp_max').innerHTML = 'temp_max : ' + data.main.temp_max;
}