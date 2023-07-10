/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSxpSUFBaUksYUFBYTtBQUM5STtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9Y2UwMGJkZTE5ZDM1NGVjMzkyNTAzMzU5MjMwODA3JnE9JyArIGxvY2F0aW9uLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZ2V0V2VhdGhlcignbG9uZG9uJyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9