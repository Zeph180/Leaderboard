const game = {
  name: 'myloyu',
  id: 'AiEF51ktLuSpHCyOf',
};

const urlEndPoint = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${game.name}/scores`;

const getData = async () => {
  const request = await fetch(urlEndPoint);
  const response = await request.json();
  return response.result;
};

const postData = async (scores) => {
  await fetch(urlEndPoint, {
    method: 'POST',
    body: JSON.stringify({
      user: scores.userName,
      score: scores.userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { getData, postData };