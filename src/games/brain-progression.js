import setGame from '../index.js';

import getRandomNumber from '../utils.js';

const QUESTION_TITLE = 'What number is missing in the progression?';
const sequenceLength = 10;
const setGameParams = () => {
  let correctRespond = null;
  const generateOption = () => {
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
  const generateCorrectResult = () => correctRespond;
  const gameParamsGenerators = {
    generateOption,
    generateCorrectResult,
  };
  return gameParamsGenerators;
};
const playBrainProgression = () => {
  setGame(QUESTION_TITLE, setGameParams);
};

export default playBrainProgression;
