/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weather)
/* harmony export */ });
class Weather {
  constructor (location, region, country, local_time, current_temp, current_condition, dates, temps, conditions) {
    this.location = location;
    this.region = region;
    this.country = country;
    this.local_time = local_time;
    this.current_temp = current_temp;
    this.current_condition = current_condition;
    this.dates = dates;
    this.temps = temps;
    this.conditions = conditions;
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");


let currentLocation = new _weather__WEBPACK_IMPORTED_MODULE_0__["default"]();
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

  const weatherObj = new _weather__WEBPACK_IMPORTED_MODULE_0__["default"] (location, region, country, local_time, current_temp, current_condition, dates, temps, conditions);

  return weatherObj;
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(input.value);
});

getWeather('london');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ2hDO0FBQ0EsMEJBQTBCLGdEQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSkFBMEosYUFBYTtBQUN2SztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyIHtcclxuICBjb25zdHJ1Y3RvciAobG9jYXRpb24sIHJlZ2lvbiwgY291bnRyeSwgbG9jYWxfdGltZSwgY3VycmVudF90ZW1wLCBjdXJyZW50X2NvbmRpdGlvbiwgZGF0ZXMsIHRlbXBzLCBjb25kaXRpb25zKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICB0aGlzLnJlZ2lvbiA9IHJlZ2lvbjtcclxuICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XHJcbiAgICB0aGlzLmxvY2FsX3RpbWUgPSBsb2NhbF90aW1lO1xyXG4gICAgdGhpcy5jdXJyZW50X3RlbXAgPSBjdXJyZW50X3RlbXA7XHJcbiAgICB0aGlzLmN1cnJlbnRfY29uZGl0aW9uID0gY3VycmVudF9jb25kaXRpb247XHJcbiAgICB0aGlzLmRhdGVzID0gZGF0ZXM7XHJcbiAgICB0aGlzLnRlbXBzID0gdGVtcHM7XHJcbiAgICB0aGlzLmNvbmRpdGlvbnMgPSBjb25kaXRpb25zO1xyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlclwiO1xyXG5cclxubGV0IGN1cnJlbnRMb2NhdGlvbiA9IG5ldyBXZWF0aGVyKCk7XHJcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXInKTtcclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9Y2UwMGJkZTE5ZDM1NGVjMzkyNTAzMzU5MjMwODA3JmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vJnE9JyArIGxvY2F0aW9uLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGN1cnJlbnRMb2NhdGlvbiA9IHByb2Nlc3NEYXRhKHdlYXRoZXJEYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0RhdGEoZGF0YSkge1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4gIGNvbnNvbGUubG9nKCdwcm9jZXNzRGF0YScsIGxvY2F0aW9uKTtcclxuICBjb25zdCByZWdpb24gPSBkYXRhLmxvY2F0aW9uLnJlZ2lvbjtcclxuICBjb25zdCBjb3VudHJ5ID0gZGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xyXG4gIGNvbnN0IGxvY2FsX3RpbWUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZTtcclxuICBjb25zdCBjdXJyZW50X3RlbXAgPSBkYXRhLmN1cnJlbnQudGVtcF9mO1xyXG4gIGNvbnN0IGN1cnJlbnRfY29uZGl0aW9uID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG4gIGNvbnN0IGRheV8wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlO1xyXG4gIGNvbnN0IHRlbXBfMCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmF2Z3RlbXBfZjtcclxuICBjb25zdCBjb25kaXRpb25fMCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi50ZXh0O1xyXG4gIGNvbnN0IGRheV8xID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlO1xyXG4gIGNvbnN0IHRlbXBfMSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmF2Z3RlbXBfZjtcclxuICBjb25zdCBjb25kaXRpb25fMSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi50ZXh0O1xyXG4gIGNvbnN0IGRheV8yID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXRlO1xyXG4gIGNvbnN0IHRlbXBfMiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmF2Z3RlbXBfZjtcclxuICBjb25zdCBjb25kaXRpb25fMiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi50ZXh0O1xyXG5cclxuICBjb25zdCBkYXRlcyA9IFtkYXlfMCwgZGF5XzEsIGRheV8yXTtcclxuICBjb25zdCB0ZW1wcyA9IFt0ZW1wXzAsIHRlbXBfMSwgdGVtcF8yXTtcclxuICBjb25zdCBjb25kaXRpb25zID0gW2NvbmRpdGlvbl8wLCBjb25kaXRpb25fMSwgY29uZGl0aW9uXzJdO1xyXG5cclxuICBjb25zdCB3ZWF0aGVyT2JqID0gbmV3IFdlYXRoZXIgKGxvY2F0aW9uLCByZWdpb24sIGNvdW50cnksIGxvY2FsX3RpbWUsIGN1cnJlbnRfdGVtcCwgY3VycmVudF9jb25kaXRpb24sIGRhdGVzLCB0ZW1wcywgY29uZGl0aW9ucyk7XHJcblxyXG4gIHJldHVybiB3ZWF0aGVyT2JqO1xyXG59XHJcblxyXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSk7XHJcbn0pO1xyXG5cclxuZ2V0V2VhdGhlcignbG9uZG9uJyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==