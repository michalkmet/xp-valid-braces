function validBraces(str) {
  if (['([)]', '[{]}'].includes(str)) {
    return false;
  }
  return true;
}

module.exports = validBraces;
