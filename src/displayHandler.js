import format from "date-fns/format";

const SUNNY = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
const MOON = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
const CLOUDY = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>';
const DRIZZLE = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-drizzle"><line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>';
const SNOW = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-snow"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>';
const LIGHTNING = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-lightning"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg>';
const RAIN = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>';
const ALERT = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
const weatherIcons = {
  999: ALERT,
  1000: SUNNY,
  1001: MOON,
  1003: CLOUDY,
  1006: CLOUDY,
  1009: CLOUDY,
  1030: CLOUDY,
  1063: DRIZZLE,
  1066: SNOW,
  1069: SNOW,
  1072: SNOW,
  1087: LIGHTNING,
  1114: SNOW,
  1117: SNOW,
  1135: CLOUDY,
  1147: CLOUDY,
  1150: DRIZZLE,
  1153: DRIZZLE,
  1168: DRIZZLE,
  1171: DRIZZLE,
  1180: DRIZZLE,
  1183: DRIZZLE,
  1186: RAIN,
  1189: RAIN,
  1192: RAIN,
  1195: RAIN,
  1198: RAIN,
  1201: RAIN,
  1204: SNOW,
  1207: SNOW,
  1210: SNOW,
  1213: SNOW,
  1216: SNOW,
  1219: SNOW,
  1222: SNOW,
  1225: SNOW,
  1237: SNOW,
  1240: DRIZZLE,
  1243: RAIN,
  1246: RAIN,
  1249: SNOW,
  1252: SNOW,
  1255: SNOW,
  1258: SNOW,
  1261: SNOW,
  1264: SNOW,
  1273: LIGHTNING,
  1276: LIGHTNING,
  1279: LIGHTNING,
  1282: LIGHTNING,
};

export default function displayWeather(data) {
  const body = document.querySelector('.body');

  body.appendChild(getCurrentWeather(data));
  body.appendChild(getForecast(data));
}

function getCurrentWeather(weather) {
  const container = document.createElement('div');
  const title = document.createElement('div');
  const temperature = document.createElement('div');
  const iconContainer = document.createElement('div');
  const condition = document.createElement('p');

  container.classList.add('current-container');
  title.classList.add('current-title');
  temperature.classList.add('current-temperature');
  iconContainer.classList.add('current-icon');
  condition.classList.add('current-condition');

  title.textContent = 'Current Weather';
  temperature.textContent = weather.current_temp;
  iconContainer.innerHTML = getIcon(weather.current_code);
  condition.textContent = weather.current_condition;

  container.appendChild(title);
  container.appendChild(temperature);
  container.appendChild(iconContainer);
  container.appendChild(condition);

  return container;
}

function getForecast(weather) {
  const forecastDiv = document.createElement('div');
  forecastDiv.classList.add('forecasts');

  for (let i = 0; i < 3; i++) {
    const container = document.createElement('div');
    const date = document.createElement('div');
    const temperature = document.createElement('div');
    const iconContainer = document.createElement('div');
    const condition = document.createElement('p');

    container.classList.add('forecast-container');
    date.classList.add('date');
    temperature.classList.add('temperature');
    iconContainer.classList.add('icon');
    condition.classList.add('condition');

    const dateData = convertDate(weather.dates[i]);
    date.textContent = i === 0 ? 'Today' : format(new Date(dateData), 'EEE, MMM d');
    temperature.textContent = weather.temps[i];
    iconContainer.innerHTML = getIcon(weather.codes[i]);
    condition.textContent = weather.conditions[i];

    container.appendChild(date);
    container.appendChild(temperature);
    container.appendChild(iconContainer);
    container.appendChild(condition);

    forecastDiv.appendChild(container);
  }

  return forecastDiv;
}

function convertDate(date) {    //Converts YYYY-MM-DD to YYYY, MM, DD and removes leading zeroes
  let dateArray = date.split('-');
  dateArray.forEach((date, index) => {
      if (date[0] == "0" && index != 0) {
          dateArray[index] = date.substring(1);
      }
  });
  return dateArray.join(', ');
}

function getIcon(code) {
  if (code in weatherIcons) {
    return weatherIcons[code];
  } else return weatherIcons[999];
}