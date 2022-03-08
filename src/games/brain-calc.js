import setGame from '../index.js';

import getRandomNumber from '../utils.js';

const QUESTION_TITLE = 'What is the result of the expression?';
const numberMaxVal = 100;
const numberMinVal = 0;
const inputParams = {
  operatorFuncs: {
    add(arg1, arg2) {
      return arg1 + arg2;
    },
    subst(arg1, arg2) {
      return arg1 - arg2;
    },
    multiply(arg1, arg2) {
      return arg1 * arg2;
    },
  },
  operators: ['add', 'subst', 'multiply'],
  operatorToSymbs: {
    add: '+',
    subst: '-',
    multiply: '*',
  },
};

const { operatorFuncs, operators, operatorToSymbs } = inputParams;

const setGameParams = () => {
  const operands = [];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  operands[0] = getRandomNumber(numberMinVal, numberMaxVal);
  operands[1] = getRandomNumber(numberMinVal, numberMaxVal);
  const operatorSymb = operatorToSymbs[operator];
  const option = `${operands[0]} ${operatorSymb} ${operands[1]}`;
  const correctVal = operatorFuncs[operator](operands[0], operands[1]);

  return {
    option,
    correctVal,
  };
};





const setGameParams = () => {
  const operands = [];
  let operator = null;

  const generateOption = () => {
    operator = operators[getRandomNumber(0, operators.length - 1)];
    operands[0] = getRandomNumber(numberMinVal, numberMaxVal);
    operands[1] = getRandomNumber(numberMinVal, numberMaxVal);
    const operatorSymb = operatorToSymbs[operator];
    return `${operands[0]} ${operatorSymb} ${operands[1]}`;
  };
  const generateCorrectResult = () => operatorFuncs[operator](operands[0], operands[1]);
  const gameParamsGenerators = {
    generateOption,
    generateCorrectResult,
  };
  return gameParamsGenerators;
};

const playBrainCalc = () => {
  setGame(QUESTION_TITLE, setGameParams);
};

export default playBrainCalc;
