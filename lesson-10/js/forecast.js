const presForecast = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=b60ab52ec9efed85dea61d8455d22071';

fetch(presForecast)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const townForecast = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

	    console.log(townForecast);

	    const daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = 0;
	    townForecast.forEach(forecast => {
            let x = new Date(forecast.dt_txt);
            document.getElementById('day'+(day+1)).textContent = daysofweek[x.getDay()];
            document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById('img'+(day+1)).alt = forecast.weather[0].description
	        document.getElementById('temp'+(day+1)).textContent = Math.round((forecast.main.temp - 273.15) * (9 / 5) + 32) + '\u00B0 F';
	        day++;	  
	    });
    })