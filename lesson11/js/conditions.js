const presCurrent = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=b60ab52ec9efed85dea61d8455d22071';
const sodaCurrent = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=b60ab52ec9efed85dea61d8455d22071';
const fishCurrent = 'https://api.openweathermap.org/data/2.5/weather?id=5585000&APPID=b60ab52ec9efed85dea61d8455d22071';

fetch(presCurrent)
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

    let calcWindchill = 0
    if (jsObject.main.temp > 283.15 || jsObject.wind.speed < 3.0) {
        calcWindchill= "NA";
    } else {
        calcWindchill = Math.round(35.74 + (0.6215*((jsObject.main.temp - 273.15) * (9 / 5) + 32)) - (35.75 * (speed ** 0.16)) + (0.4275 * ((jsObject.main.temp - 273.15) * (9 / 5) + 32) * (speed ** 0.16)));
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

    document.querySelector('div.pSum').appendChild(summary);
        
  });

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

    let calcWindchill = 0
    if (jsObject.main.temp > 283.15 || jsObject.wind.speed < 3.0) {
        calcWindchill= "NA";
    } else {
        calcWindchill = Math.round(35.74 + (0.6215*((jsObject.main.temp - 273.15) * (9 / 5) + 32)) - (35.75 * (speed ** 0.16)) + (0.4275 * ((jsObject.main.temp - 273.15) * (9 / 5) + 32) * (speed ** 0.16)));
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

fetch(fishCurrent)
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

    let calcWindchill = 0
    if (jsObject.main.temp > 283.15 || jsObject.wind.speed < 3.0) {
        calcWindchill= "NA";
    } else {
        calcWindchill = Math.round(35.74 + (0.6215*((jsObject.main.temp - 273.15) * (9 / 5) + 32)) - (35.75 * (speed ** 0.16)) + (0.4275 * ((jsObject.main.temp - 273.15) * (9 / 5) + 32) * (speed ** 0.16)));
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

    document.querySelector('div.fhSum').appendChild(summary);
        
  });