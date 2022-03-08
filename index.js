export default (str) => str.split('').reverse().join('');

import setGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const QUESTION_TITLE = 'What number is missing in the progression?';
const sequenceLength = 10;
let correctRespond = null;

const getOption = () => {
  const dif = getRandomNumber(1, 9);
  const firstMember = getRandomNumber(1, 20);
  const hiddenMemeberIdx = getRandomNumber(1, sequenceLength - 1);
  let sequenceStr = `${firstMember}`;
  const buildSequence = (idx, acc, count) => {
    if (count === sequenceLength) {
      return sequenceStr;
    }
    const newElem = acc + dif;
    if (idx === hiddenMemeberIdx) {
      sequenceStr = sequenceStr.concat(' ..');
      correctRespond = newElem;
    } else {
      sequenceStr = sequenceStr.concat(` ${newElem}`);
    }
    const nextIdx = idx + 1;
    const newCount = count + 1;
    return buildSequence(nextIdx, newElem, newCount);
  };
  return buildSequence(0, firstMember, 0);
};

const getCorrectResult = () => correctRespond;

const playBrainProgression = () => {
  setGame(QUESTION_TITLE, getOption, getCorrectResult);
};

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


export default playBrainProgression;
