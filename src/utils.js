export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

export const shuffleArray = (arr) => {
  const shuffledArr = arr;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const randomNum = Math.floor(Math.random() * (i + 1));
    const randomElement = arr[randomNum];
    shuffledArr[randomNum] = shuffledArr[i];
    shuffledArr[i] = randomElement;
  }
  return shuffledArr;
};
