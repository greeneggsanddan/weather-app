import getWeather from "./dataHandler";
import displayWeather from "./displayHandler";
import addEventListeners from "./inputHandler";

addEventListeners();
getWeather('San Francisco').then(data => {
  displayWeather(data);
});