import setGame from '../index.js';

import getRandomNumber from '../utils.js';

const QUESTION_TITLE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const setGameParams = () => {
  const generateOption = () => getRandomNumber(1, 100);
  const generateCorrectResult = (input) => {
    if (input === 1) {
      return 'no';
    }
    for (let i = 2; i * i <= input; i += 1) {
      if (input % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const gameParamsGenerators = {
    generateOption,
    generateCorrectResult,
  };
  return gameParamsGenerators;
};

const playBrainPrime = () => {
  setGame(QUESTION_TITLE, setGameParams);
};

export default playBrainPrime;
