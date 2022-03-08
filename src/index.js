import readlineSync from 'readline-sync';

import greet from './greet.js';

const roundTotalNum = 3;
// let correctAnswersCount = 0;

/*
const getOption = (getOptionCallback) => getOptionCallback();
const getCorrectResult = (getCorrectResCallback, input) => getCorrectResCallback(input);
*/

// const getGameParamsGenerators = (getGameParamsCallback) => getGameParamsCallback();
const setGameParams = (callback) => callback();
const checkRespond = (correctVal, respond) => correctVal === respond;
const formQuestion = (option) => `Question: ${option}`;
/*
const formFeedback = (correctVal, respond, gamer) => {
  const isCorrect = checkRespond(correctVal, respond);
  if (isCorrect) {
    return 'Correct!';
  }
  return `'${respond}' is wrong answer ;(. Correct answer was '${correctVal}'.\n
    Let's try again, ${gamer}!`;
};
*/

const getRespond = () => {
  const respond = readlineSync.question('Your answer: ');
  console.log(typeof respond);
  return Number.isNaN(parseInt(respond, 10)) ? respond : parseInt(respond, 10);
};

const setGame = (title, setGameParamsCallback) => {
  let roundCount = 0;
  const gamer = greet();
  console.log(title);
  while (roundCount < roundTotalNum) {
    /*
    const gameParams = getGameParams(getGameParamsCallback);
    const question = formQuestion(gameParams.option);
    console.log(question);
    const respond = getRespond();
    const feedback = formFeedback(gameParams.correctResult, respond, gamer);
    console.log(feedback);

    if (feedback === 'Correct!') {
      correctAnswersCount += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${gamer}!`);
  */
    // const gameGenerators = getGameParams(getGameParamsCallback);
    const gameGenerators = setGameParams(setGameParamsCallback);
    const option = gameGenerators.generateOption();
    const correctRes = gameGenerators.generateCorrectResult();

    const question = formQuestion(option);
    console.log(question);
    const respond = getRespond();
    // const feedback = formFeedback(correctResult, respond, gamer);
    const isCorrect = checkRespond(correctRes, respond);
    if (isCorrect) {
      roundCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${respond}' is wrong answer ;(. Correct answer was '${correctRes}'.\nLet's try again, ${gamer}!`);
      return;
    }

    /*
    console.log(feedback);
    if (feedback === 'Correct!') {
      roundCount += 1;
    } else {
      return;
    }
    */
  }
  console.log(`Congratulations, ${gamer}!`);
};

export default setGame;
