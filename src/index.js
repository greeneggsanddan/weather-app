async function getWeather(location) {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=ce00bde19d354ec392503359230807&q=' + location, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
}

getWeather('london');