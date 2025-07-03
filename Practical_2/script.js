const weatherData = {
  anand: { temp: 34, desc: "Sunny" },
  changa: { temp: 32, desc: "Partly Cloudy" },
  nadiad: { temp: 33, desc: "Humid" }
};

document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const cityInput = document.getElementById('cityInput').value.trim().toLowerCase();
  const weatherResult = document.getElementById('weatherResult');

  if (!cityInput) {
    weatherResult.textContent = "Please enter a city name.";
    return;
  }

  const data = weatherData[cityInput];

  if (data) {
    weatherResult.textContent = `Temperature in ${capitalize(cityInput)}: ${data.temp}°C, ${data.desc}`;
  } else {
    weatherResult.textContent = "City not found in database.";
  }
});

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
