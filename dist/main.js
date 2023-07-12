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
    return processData(weatherData);
  } catch (error) {
    console.log(error);
  }
}

function processData(data) {
  const location = data.location.name;
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
  const location = input.value;
  const locationData = getWeather(location).then(data => {
    console.log(data.location);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ2hDO0FBQ0EsMEJBQTBCLGdEQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSkFBMEosYUFBYTtBQUN2SztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXIge1xyXG4gIGNvbnN0cnVjdG9yIChsb2NhdGlvbiwgcmVnaW9uLCBjb3VudHJ5LCBsb2NhbF90aW1lLCBjdXJyZW50X3RlbXAsIGN1cnJlbnRfY29uZGl0aW9uLCBkYXRlcywgdGVtcHMsIGNvbmRpdGlvbnMpIHtcclxuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgIHRoaXMucmVnaW9uID0gcmVnaW9uO1xyXG4gICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcclxuICAgIHRoaXMubG9jYWxfdGltZSA9IGxvY2FsX3RpbWU7XHJcbiAgICB0aGlzLmN1cnJlbnRfdGVtcCA9IGN1cnJlbnRfdGVtcDtcclxuICAgIHRoaXMuY3VycmVudF9jb25kaXRpb24gPSBjdXJyZW50X2NvbmRpdGlvbjtcclxuICAgIHRoaXMuZGF0ZXMgPSBkYXRlcztcclxuICAgIHRoaXMudGVtcHMgPSB0ZW1wcztcclxuICAgIHRoaXMuY29uZGl0aW9ucyA9IGNvbmRpdGlvbnM7XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgV2VhdGhlciBmcm9tIFwiLi93ZWF0aGVyXCI7XHJcblxyXG5sZXQgY3VycmVudExvY2F0aW9uID0gbmV3IFdlYXRoZXIoKTtcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhcicpO1xyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ0bicpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1jZTAwYmRlMTlkMzU0ZWMzOTI1MDMzNTkyMzA4MDcmZGF5cz0zJmFxaT1ubyZhbGVydHM9bm8mcT0nICsgbG9jYXRpb24sIHttb2RlOiAnY29ycyd9KTtcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHByb2Nlc3NEYXRhKHdlYXRoZXJEYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0RhdGEoZGF0YSkge1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4gIGNvbnN0IHJlZ2lvbiA9IGRhdGEubG9jYXRpb24ucmVnaW9uO1xyXG4gIGNvbnN0IGNvdW50cnkgPSBkYXRhLmxvY2F0aW9uLmNvdW50cnk7XHJcbiAgY29uc3QgbG9jYWxfdGltZSA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lO1xyXG4gIGNvbnN0IGN1cnJlbnRfdGVtcCA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XHJcbiAgY29uc3QgY3VycmVudF9jb25kaXRpb24gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XHJcbiAgY29uc3QgZGF5XzAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGU7XHJcbiAgY29uc3QgdGVtcF8wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuYXZndGVtcF9mO1xyXG4gIGNvbnN0IGNvbmRpdGlvbl8wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLnRleHQ7XHJcbiAgY29uc3QgZGF5XzEgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGU7XHJcbiAgY29uc3QgdGVtcF8xID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuYXZndGVtcF9mO1xyXG4gIGNvbnN0IGNvbmRpdGlvbl8xID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLnRleHQ7XHJcbiAgY29uc3QgZGF5XzIgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGU7XHJcbiAgY29uc3QgdGVtcF8yID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9mO1xyXG4gIGNvbnN0IGNvbmRpdGlvbl8yID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLnRleHQ7XHJcblxyXG4gIGNvbnN0IGRhdGVzID0gW2RheV8wLCBkYXlfMSwgZGF5XzJdO1xyXG4gIGNvbnN0IHRlbXBzID0gW3RlbXBfMCwgdGVtcF8xLCB0ZW1wXzJdO1xyXG4gIGNvbnN0IGNvbmRpdGlvbnMgPSBbY29uZGl0aW9uXzAsIGNvbmRpdGlvbl8xLCBjb25kaXRpb25fMl07XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJPYmogPSBuZXcgV2VhdGhlciAobG9jYXRpb24sIHJlZ2lvbiwgY291bnRyeSwgbG9jYWxfdGltZSwgY3VycmVudF90ZW1wLCBjdXJyZW50X2NvbmRpdGlvbiwgZGF0ZXMsIHRlbXBzLCBjb25kaXRpb25zKTtcclxuXHJcbiAgcmV0dXJuIHdlYXRoZXJPYmo7XHJcbn1cclxuXHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gaW5wdXQudmFsdWU7XHJcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gZ2V0V2VhdGhlcihsb2NhdGlvbikudGhlbihkYXRhID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEubG9jYXRpb24pO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9