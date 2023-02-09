import './style.css';
import { getData, postData } from './data.js';

const refreshBtn = document.getElementById('refresh-btn');
const submitBtn = document.getElementById('submit');
const scoreCont = document.getElementById('left-art');
const userNameIn = document.getElementById('usr-name');
const userScoreIn = document.getElementById('usr-score');
const items = document.querySelectorAll('p');

if (items.length === 0) {
  scoreCont.innerHTML = "No score yet"
}

const updateScores = async () => {
  scoreCont.innerHTML = '';
  const scores = await getData();

  scores.forEach((element) => {
    const item = document.createElement('p');
    item.innerHTML = `
      ${element.user} : ${element.score}
    `;
    scoreCont.appendChild(item);
  });
};

refreshBtn.addEventListener('click', updateScores);

submitBtn.addEventListener('click', (e) => {
  const userInput = {
    userName: userNameIn.value,
    userScore: userScoreIn.value,
  };
  e.preventDefault();
  postData(userInput);
  updateScores();
});

window.addEventListener('DOMContentLoad', updateScores);