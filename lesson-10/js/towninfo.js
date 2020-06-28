const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let motto = document.createElement('p');
        let found = document.createElement('p');
        let population = document.createElement('p');
        let rain = document.createElement('p');
        if (towns[i].name == "Fish Haven") {
            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            found.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            card.appendChild(name);
            card.appendChild(motto);
            card.appendChild(found);
            card.appendChild(population);
            card.appendChild(rain);
            document.querySelector('div.fishhaven').appendChild(card);
        } else if (towns[i].name == "Preston") {
            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            found.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            card.appendChild(name);
            card.appendChild(motto);
            card.appendChild(found);
            card.appendChild(population);
            card.appendChild(rain);
            document.querySelector('div.preston').appendChild(card);
        } else if (towns[i].name == "Soda Springs") {
            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            found.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            card.appendChild(name);
            card.appendChild(motto);
            card.appendChild(found);
            card.appendChild(population);
            card.appendChild(rain);
            document.querySelector('div.sodasprings').appendChild(card);
        }
    }
  });


