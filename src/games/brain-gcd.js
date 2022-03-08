import setGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const QUESTION_TITLE = 'Find the greatest common divisor of given numbers.';
const numberMaxVal = 100;
const numberMinVal = 1;
const input = [];

const getOption = () => {
  input[0] = getRandomNumber(numberMinVal, numberMaxVal);
  input[1] = getRandomNumber(numberMinVal, numberMaxVal);
  return `${input[0]} ${input[1]}`;
};

const getCorrectResult = () => {
  const x = input[0];
  const y = input[1];
  if (x === y) {
    return x;
  }
  const getDividor = (val1, val2) => {
    if (val1 === 1 || val2 === 1) {
      return 1;
    }
    const max = val1 > val2 ? val1 : val2;
    const min = val1 > val2 ? val2 : val1;
    if (max % min === 0) {
      return min;
    }
    const newVal = max % min;
    return getDividor(newVal, min);
  };
  return getDividor(x, y);
};

const playBrainGcd = () => {
  setGame(QUESTION_TITLE, getOption, getCorrectResult);
};

export default playBrainGcd;
