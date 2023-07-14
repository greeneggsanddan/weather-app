import getWeather from "./dataHandler";
import displayWeather, { addEventListeners } from "./displayHandler";

addEventListeners();
getWeather('San Francisco').then(data => {
  displayWeather(data);
});