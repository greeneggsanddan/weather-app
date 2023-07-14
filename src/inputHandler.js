import getWeather from "./dataHandler";
import displayWeather from "./displayHandler";

export default function addEventListeners() {
  const input = document.querySelector('.search-bar');
  const submitBtn = document.querySelector('.submit-btn');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const location = input.value;
    getWeather(location).then(data => {
      displayWeather(data);
    });
  });
}




