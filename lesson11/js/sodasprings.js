const sodaCurrent = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=b60ab52ec9efed85dea61d8455d22071';
fetch(sodaCurrent)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let summary = document.createElement('section');
    let current = document.createElement('p');
    let currentTemp = document.createElement('p');
    let high = document.createElement('p');
    let windchill = document.createElement('p');
    let humidity = document.createElement('p');
    let wind = document.createElement('p');

    let calcWindchill = 0;
    if (jsObject.main.temp > 283.15 || jsObject.wind.speed < 3.0) {
        calcWindchill= "NA";
    } else {
        calcWindchill = Math.round(35.74 + (0.6215 * ((jsObject.main.temp - 273.15) * (9 / 5) + 32)) - (35.75 * (speed ** 0.16)) + (0.4275 * ((jsObject.main.temp - 273.15) * (9 / 5) + 32) * (speed ** 0.16)));
    }
    
    current.textContent = "Currently: " + jsObject.weather[0].main;
    currentTemp.textContent = "Temp: " + Math.round((jsObject.main.temp - 273.15) * (9 / 5) + 32) + "\u00B0 F";
    high.textContent = "High: " + Math.round((jsObject.main.temp_max - 273.15) * (9 / 5) + 32) + "\u00B0 F";
    windchill.textContent = "Windchill: " + calcWindchill + "\u00B0 F";
    humidity.textContent = "Humidity: " + jsObject.main.humidity + "%";
    wind.textContent = "Wind Speed: " + Math.round(jsObject.wind.speed) + " mph";
    
    summary.appendChild(current);
    summary.appendChild(currentTemp);
    summary.appendChild(high);
    summary.appendChild(windchill);
    summary.appendChild(humidity);
    summary.appendChild(wind);

    document.querySelector('div.ssSum').appendChild(summary);
        
  });

const sodaForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=b60ab52ec9efed85dea61d8455d22071';
fetch(sodaForecast)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const townForecast = jsObject.list.filter((element) => element.dt_txt.includes('18:00:00'));
        console.log(townForecast);
        const daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = 0;
        townForecast.forEach(forecast => {
            let x = new Date(forecast.dt_txt);
            document.getElementById('ssday' + (day + 1)).textContent = daysofweek[x.getDay()];
            document.getElementById('ssimg' + (day + 1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById('ssimg' + (day + 1)).alt = forecast.weather[0].description;
            document.getElementById('sstemp' + (day + 1)).textContent = Math.round((forecast.main.temp - 273.15) * (9 / 5) + 32) + '\u00B0 F';
            day++;
        });
    });

const findSoda = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(findSoda)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const town = jsonObject['towns'];
        for (let i = 0; i < town.length; i++) {
            let townEvents = town[i].events;
            if (town[i].name == "Soda Springs") {
                for (let x = 0; x < townEvents.length; x++) {
                    let event = document.createElement('p');
                    event.innerHTML = townEvents[x];
                    document.querySelector('div.ssEvents').appendChild(event);
                }
            }    
        }
    });

