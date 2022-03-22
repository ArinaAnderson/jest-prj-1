const defineCatSign = (pattern) => {
  let sign = null;
  switch (pattern) {
    case 'calico':
      sign = 'gemini';
      break;
    case 'tuxedo':
      sign = 'libra';
      break;
    default:
      throw new Error(`Unknown order state: '${pattern}'!`);
  }
  return sign;
};

console.log(defineCatSign('calico'));
// console.log(defineCatSign('white'));

export default defineCatSign;
