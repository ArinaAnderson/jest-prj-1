import setGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const QUESTION_TITLE = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberMaxVal = 100;
const numberMinVal = 0;

const setGameParams = () => {
  const generateOption = () => getRandomNumber(numberMinVal, numberMaxVal);
  const generateCorrectResult = (output) => (output % 2 === 0 ? 'yes' : 'no');
  const gameParamsGenerators = {
    generateOption,
    generateCorrectResult,
  };
  return gameParamsGenerators;
};

const playBrainEven = () => {
  setGame(QUESTION_TITLE, setGameParams);
};

export default playBrainEven;
