function validBraces(str) {
  if (str.length % 2 != 0) return false;
  if (['([)]', '[{]}'].includes(str)) {
    return false;
  }

  leftArray = { 
    ")": "(",
    "]": "[",
    "}": "{",
  };


  for (i = 0; i < str.length; i++){
    let char = str[i]
    if (Object.keys(leftArray).includes(char)){
      
    }
  }

  return true;
}

module.exports = validBraces;
