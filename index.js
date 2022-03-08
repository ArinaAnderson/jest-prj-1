export default (str) => str.split('').reverse().join('');

(str) => {
  const iter = (acc, idx) => {
    if (idx === -1) {
      return acc;
    }
    return iter(`${str[idx]}${acc}`);
  };
  return iter('', str.length - 1);
};
