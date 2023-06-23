const validBraces = require('./validBraces');

describe('validBraces', () => {
  it('should return true when given "()"', () => {
    expect(validBraces('()')).toBe(true);
  });

  it('should return false when given "([)]"', () => {
    expect(validBraces('([)]')).toBe(false);
  });

  it('should return true when given "{}"', () => {
    expect(validBraces('{}')).toBe(true);
  });

  it('should return false when given "[{]}"', () => {
    expect(validBraces('[{]}')).toBe(false);
  });

  it('should return false when given "()}"', () => {
    expect(validBraces('()}')).toBe(false);
  });

  it('should return false when given "([{]})"', () => {
    expect(validBraces('([{]})')).toBe(false);
  });

  it('should return true when given "([{}])"', () => {
    expect(validBraces('([{}])')).toBe(true);
  });
});
