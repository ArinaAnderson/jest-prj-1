import readlineSync from 'readline-sync';

import greet from '../src/greet.js';

const QUESTION_TITLE = 'Answer "yes" if the number is even, otherwise answer "no".';
const correctAnswersNum = 3;
let correctAnswersCount = 0;

const checkIfEven = (input) => input % 2 === 0 ? 'yes' : 'no';
const getRandomNumber = () => Math.floor(Math.random() * 101);

const checkAnswer = (correctVal, respond) => correctVal === respond;
const formQuestion = (option) => `Question ${option}`;

const formFeedback = (correctVal, respond, gamer) => {
  const isCorrect = checkAnswer(correctVal, respond);
  if (isCorrect) {
    return 'Correct!';
  }
  return `'${respond}' is wrong answer ;(. Correct answer was '${correctVal}'.\nLet's try again, ${gamer}!`;
};

const getRespond = () => {
  const respond = readlineSync.question('Your answer: ');
  return respond;
};

const isEven = () => {
  const gamer = greet();
  console.log(QUESTION_TITLE);
  while (correctAnswersCount < correctAnswersNum) {
    const input = getRandomNumber();
    const question = formQuestion(input);
    console.log(question);
    const respond = getRespond();
    const feedback = formFeedback(checkIfEven(input), respond, gamer);
    console.log(feedback);
    
    if (feedback === 'Correct!') {
      correctAnswersCount +=1;
    } else {
      return 
    }
  }
  console.log(`Congratulations, ${gamer}!`);
};

export default isEven;