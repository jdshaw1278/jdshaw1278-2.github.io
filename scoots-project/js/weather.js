const current = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&APPID=b60ab52ec9efed85dea61d8455d22071';
const forecast = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&APPID=b60ab52ec9efed85dea61d8455d22071';

fetch(current)
  .then(response => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('today').textContent = "Today";
    document.getElementById('timg').src = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png";
    document.getElementById('timg').alt = jsObject.weather[0].description;
    document.getElementById('ttemp').textContent = Math.round((jsObject.main.temp - 273.15) * (9 / 5) + 32) + '\u00B0 F';
    document.getElementById('thum').textContent = jsObject.main.humidity + "% Humidity";
 });

fetch(forecast)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const cozumelF = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

	    console.log(cozumelF);

	    const daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = 0;
	    cozumelF.forEach(forecast => {
            let x = new Date(forecast.dt_txt);
            document.getElementById('pday'+(day+1)).textContent = daysofweek[x.getDay()];
            document.getElementById('pimg'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById('pimg'+(day+1)).alt = forecast.weather[0].description;
            document.getElementById('ptemp'+(day+1)).textContent = Math.round((forecast.main.temp - 273.15) * (9 / 5) + 32) + '\u00B0 F';
            document.getElementById('phum'+(day+1)).textContent = forecast.main.humidity + "% Humidity";
	        day++;	  
	    });
    });