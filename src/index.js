import getWeather from "./dataHandler";
import { addEventListeners } from "./displayHandler";

addEventListeners();
getWeather('San Francisco');