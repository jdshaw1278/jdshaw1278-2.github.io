const presForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=b60ab52ec9efed85dea61d8455d22071';
const sodaForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=b60ab52ec9efed85dea61d8455d22071';
const fishForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5585000&APPID=b60ab52ec9efed85dea61d8455d22071';

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
            document.getElementById('pday'+(day+1)).textContent = daysofweek[x.getDay()];
            document.getElementById('pimg'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById('pimg'+(day+1)).alt = forecast.weather[0].description
	        document.getElementById('ptemp'+(day+1)).textContent = Math.round((forecast.main.temp - 273.15) * (9 / 5) + 32) + '\u00B0 F';
	        day++;	  
	    });
    })

fetch(sodaForecast)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const townForecast = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

	    console.log(townForecast);

	    const daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = 0;
	    townForecast.forEach(forecast => {
            let x = new Date(forecast.dt_txt);
            document.getElementById('ssday'+(day+1)).textContent = daysofweek[x.getDay()];
            document.getElementById('ssimg'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById('ssimg'+(day+1)).alt = forecast.weather[0].description
	        document.getElementById('sstemp'+(day+1)).textContent = Math.round((forecast.main.temp - 273.15) * (9 / 5) + 32) + '\u00B0 F';
	        day++;	  
	    });
    })

fetch(fishForecast)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const townForecast = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

	    console.log(townForecast);

	    const daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = 0;
	    townForecast.forEach(forecast => {
            let x = new Date(forecast.dt_txt);
            document.getElementById('fhday'+(day+1)).textContent = daysofweek[x.getDay()];
            document.getElementById('fhimg'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById('fhimg'+(day+1)).alt = forecast.weather[0].description
	        document.getElementById('fhtemp'+(day+1)).textContent = Math.round((forecast.main.temp - 273.15) * (9 / 5) + 32) + '\u00B0 F';
	        day++;	  
	    });
    })