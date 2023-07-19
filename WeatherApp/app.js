const cityInput = document.getElementById('location');
const xhr = new XMLHttpRequest();

document.getElementById('button').addEventListener('click', (event) => {
  event.preventDefault();
  const city = cityInput.value;

  if (!city) {
    const errorMessage = 'Zadejte prosím název města.';
    document.querySelector('.location h2').innerText = errorMessage;
    document.querySelector('.location h2').classList.add('error');
    return;
  }

  if (!/^[\sa-zA-Z]+$/.test(city)) {
    const errorMessage = 'Zadejte prosím platný název města (pouze písmena a mezery).';
    document.querySelector('.location h2').innerText = errorMessage;
    document.querySelector('.location h2').classList.add('error');
    return;
  }

  xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=845453724fe1d5785e10c2b07c81e4e5`, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const temperature = response.main.temp;
        const description = response.weather[0].description;
        const timestamp = response.dt * 1000;
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleDateString();
        const country = response.sys.country;
        document.getElementById('date').innerText = formattedDate;
        document.getElementById('description').innerText = description;
        document.querySelector('.temperature h3').innerHTML = `${temperature} °C`;
        document.querySelector('.location h2').innerText = `${city}, ${country}`;
        console.log(response);
        const weatherIconCode = response.weather[0].icon;
        const weatherIconElement = document.querySelector('.weather-icon img');
        weatherIconElement.src = `icons/${weatherIconCode}.png`;
      } else {
        const error = 'Chyba při načítání dat. Zkontrolujte, prosím, zadané město.';
        document.querySelector('.location h2').innerText = error;
        document.querySelector('.location h2').classList.add('error');
        console.log(error);
      }
    }
  };
  xhr.send();
});
