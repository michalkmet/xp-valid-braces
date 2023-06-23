function validBraces(str) {
  const pairOfBrackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  console.log('str: ', str);
  let arrLeftBrackets = [];
  for (i = 0; i < str.length; i++){
    let char = str[i];
    if (Object.keys(pairOfBrackets).includes(char)){
      console.log('pairOfBrackets includes this char: ', char);
      arrLeftBrackets.push(char);
    } else {
      console.log('char: ', char);
      // console.log('pair: ', pairOfBrackets[arrLeftBrackets.pop()]);
      if (char !== pairOfBrackets[arrLeftBrackets.pop()]) {
        console.log(char);
        return false;
      }
    }
    console.log('arrLeftBrackets: ', arrLeftBrackets);
  }

  return true;
}

module.exports = validBraces;
