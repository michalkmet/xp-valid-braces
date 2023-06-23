function validBraces(str) {
  const pairOfBrackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let arrLeftBrackets = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (Object.keys(pairOfBrackets).includes(char)) {
      arrLeftBrackets.push(char);
    } else {
      if (char !== pairOfBrackets[arrLeftBrackets.pop()]) {
        return false;
      }
    }
  }

  if (arrLeftBrackets.length > 0) return false;
  return true;
}

module.exports = validBraces;
