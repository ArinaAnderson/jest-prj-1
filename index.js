// (str) => str.split('').reverse().join('');
export default (str) => {
  const iter = (acc, idx) => {
    if (idx === -1) {
      return acc;
    }
    return iter(`${acc}${str[idx]}`, idx - 1);
  };
  return iter('', str.length - 1);
};
