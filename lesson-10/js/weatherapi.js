const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=b60ab52ec9efed85dea61d8455d22071';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const tempF = (jsObject.main.temp - 273.15) * (9 / 5) + 32
    document.getElementById('current-temp').textContent = Math.round(tempF);

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;  
    document.getElementById('imagesrc').textContent = imagesrc; 
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
  });

 