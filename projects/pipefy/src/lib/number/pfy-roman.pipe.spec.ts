import {PfyRomanPipe} from './pfy-roman.pipe';

describe('PfyRomanPipe', () => {
  let pipe: PfyRomanPipe;

  beforeEach(() => {
    pipe = new PfyRomanPipe();
  });

  it('should return the input value for non-positive or too large numbers', () => {
    const result1 = pipe.transform(0);
    expect(result1).toBe('0');

    const result2 = pipe.transform(-5);
    expect(result2).toBe('-5');

    const result3 = pipe.transform(4000);
    expect(result3).toBe('4000');
  });

  it('should convert small numbers to Roman numerals', () => {
    const result1 = pipe.transform(1);
    expect(result1).toBe('I');

    const result2 = pipe.transform(5);
    expect(result2).toBe('V');

    const result3 = pipe.transform(10);
    expect(result3).toBe('X');
  });

  it('should handle larger numbers', () => {
    const result1 = pipe.transform(12);
    expect(result1).toBe('XII');

    const result2 = pipe.transform(39);
    expect(result2).toBe('XXXIX');

    const result3 = pipe.transform(246)
    expect(result3).toBe('CCXLVI');
  });
});
