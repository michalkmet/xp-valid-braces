function validBraces(str) {
  if (str.length % 2 != 0) return false;
  if (['([)]', '[{]}'].includes(str)) {
    return false;
  }
  return true;
}

module.exports = validBraces;
