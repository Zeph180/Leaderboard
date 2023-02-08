import './style.css';
import { getData, postData } from './data.js';

const refreshBtn = document.getElementById('refresh-btn');
const submitBtn = document.getElementById('submit');
const scoreCont = document.getElementById('left-art');
const userNameIn = document.getElementById('usr-name');
const userScoreIn = document.getElementById('usr-score');

const updateScores = async () => {
  scoreCont.innerHTML='';
  const scores = await getData();
  console.log('yiyoyo:', scores);

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
  console.log(userInput);
  updateScores();
});

window.addEventListener('DOMContentLoad', updateScores);