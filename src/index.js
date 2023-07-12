import Weather from "./weather";

let currentLocation = new Weather();
const input = document.querySelector('.search-bar');
const submitBtn = document.querySelector('.submit-btn');

async function getWeather(location) {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=ce00bde19d354ec392503359230807&days=3&aqi=no&alerts=no&q=' + location, {mode: 'cors'});
    const weatherData = await response.json();
    currentLocation = processData(weatherData);
  } catch (error) {
    console.log(error);
  }
}

function processData(data) {
  const location = data.location.name;
  console.log('processData', location);
  const region = data.location.region;
  const country = data.location.country;
  const local_time = data.location.localtime;
  const current_temp = data.current.temp_f;
  const current_condition = data.current.condition.text;
  const day_0 = data.forecast.forecastday[0].date;
  const temp_0 = data.forecast.forecastday[0].day.avgtemp_f;
  const condition_0 = data.forecast.forecastday[0].day.condition.text;
  const day_1 = data.forecast.forecastday[1].date;
  const temp_1 = data.forecast.forecastday[1].day.avgtemp_f;
  const condition_1 = data.forecast.forecastday[1].day.condition.text;
  const day_2 = data.forecast.forecastday[2].date;
  const temp_2 = data.forecast.forecastday[2].day.avgtemp_f;
  const condition_2 = data.forecast.forecastday[2].day.condition.text;

  const dates = [day_0, day_1, day_2];
  const temps = [temp_0, temp_1, temp_2];
  const conditions = [condition_0, condition_1, condition_2];

  const weatherObj = new Weather (location, region, country, local_time, current_temp, current_condition, dates, temps, conditions);

  return weatherObj;
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(input.value);
});

getWeather('london');
