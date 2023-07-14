import Weather from "./weather";
import displayWeather from "./displayHandler";

export default async function getWeather(location) {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=ce00bde19d354ec392503359230807&days=3&aqi=no&alerts=no&q=' + location, {mode: 'cors'});
    const weatherData = await response.json();
    displayWeather(processData(weatherData));
  } catch (error) {
    alert('City not found. Try again.');
    throw error;
  }
}

function processData(data) {
  const location = data.location.name;
  const region = data.location.region;
  const country = data.location.country;
  const local_time = data.location.localtime;
  const is_day = data.current.is_day;
  const current_temp = data.current.temp_f;
  const current_condition = data.current.condition.text;
  const current_code = data.current.condition.code;
  const day_0 = data.forecast.forecastday[0].date;
  const temp_0 = data.forecast.forecastday[0].day.avgtemp_f;
  const condition_0 = data.forecast.forecastday[0].day.condition.text;
  const code_0 = data.forecast.forecastday[0].day.condition.code;
  const day_1 = data.forecast.forecastday[1].date;
  const temp_1 = data.forecast.forecastday[1].day.avgtemp_f;
  const condition_1 = data.forecast.forecastday[1].day.condition.text;
  const code_1 = data.forecast.forecastday[1].day.condition.code;
  const day_2 = data.forecast.forecastday[2].date;
  const temp_2 = data.forecast.forecastday[2].day.avgtemp_f;
  const condition_2 = data.forecast.forecastday[2].day.condition.text;
  const code_2 = data.forecast.forecastday[2].day.condition.code;

  const dates = [day_0, day_1, day_2];
  const temps = [temp_0, temp_1, temp_2];
  const conditions = [condition_0, condition_1, condition_2];
  const codes = [code_0, code_1, code_2];

  const weatherObj = new Weather (location, region, country, local_time, is_day, current_temp, current_condition, current_code, dates, temps, conditions, codes);

  return weatherObj;
}