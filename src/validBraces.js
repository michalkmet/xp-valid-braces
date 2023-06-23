function validBraces(str) {
  if (str.length % 2 != 0) return false;
  if (['([)]', '[{]}'].includes(str)) {
    return false;
  }

  const pairOfBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  console.log('str: ', str);
  let arrLeftBrackets = [];
  for (i = 0; i < str.length; i++){
    let char = str[i];
    if (Object.values(pairOfBrackets).includes(char)){
      console.log('leftBrackets includes this char: ', char);
      arrLeftBrackets.push(char);
    } else {
      console.log(char);
      console.log('pair: ', pairOfBrackets[arrLeftBrackets.pop()]);
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
