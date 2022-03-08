import setGame from '../index.js';

import { getRandomNumber, shuffleArray } from '../utils.js';

const QUESTION_TITLE = 'What is the result of the expression?';
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
  operands: [],
  operator: null,
};

const getOption = () => {
  // const {  }
  const maxVal = inputParams.operators.length - 1;
  const minVal = 0;
  inputParams.operator = shuffleArray(inputParams.operators)[getRandomNumber(minVal, maxVal)];
  inputParams.operands[0] = getRandomNumber(0, 100);
  inputParams.operands[1] = getRandomNumber(0, 100);

  const operatorToSymbs = {
    add: '+',
    subst: '-',
    multiply: '*',
  };
  const operatorSymb = operatorToSymbs[inputParams.operator];
  return `${inputParams.operands[0]} ${operatorSymb} ${inputParams.operands[1]}`;
};

const getCorrectResult = () => inputParams.operatorFuncs[inputParams.operator](inputParams.operands[0],inputParams.operands[1]);

/*
const getRandomNumber = () => {
  const operators = ['-', '+', '*'];
  Math.floor(Math.random() * 101)
};
*/

const calc = () => {
  console.log('Kukuuuu');
  setGame(QUESTION_TITLE, getOption, getCorrectResult);
};

export default calc;