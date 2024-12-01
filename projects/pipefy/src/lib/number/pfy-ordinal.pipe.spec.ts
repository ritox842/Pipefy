import {PfyOrdinalPipe} from './pfy-ordinal.pipe';

describe('PfyOrdinalPipe', () => {
  let pipe: PfyOrdinalPipe;

  beforeEach(() => {
    pipe = new PfyOrdinalPipe();
  });

  it('should return an empty string for non-numeric input', () => {
    const result = pipe.transform('abc' as unknown as number);
    expect(result).toBe('');
  });

  it('should return the correct ordinal suffix for 1', () => {
    const result = pipe.transform(1);
    expect(result).toBe('1st');
  });

  it('should return the correct ordinal suffix for 2', () => {
    const result = pipe.transform(2);
    expect(result).toBe('2nd');
  });

  it('should return the correct ordinal suffix for 3', () => {
    const result = pipe.transform(3);
    expect(result).toBe('3rd');
  });

  it('should return the correct ordinal suffix for 4', () => {
    const result = pipe.transform(4);
    expect(result).toBe('4th');
  });

  it('should handle teen numbers', () => {
    const result = pipe.transform(11);
    expect(result).toBe('11th');
  });

  it('should handle numbers ending in 11, 12, or 13', () => {
    const result1 = pipe.transform(11);
    expect(result1).toBe('11th');

    const result2 = pipe.transform(12);
    expect(result2).toBe('12th');

    const result3 = pipe.transform(13);
    expect(result3).toBe('13th');
  });

  it('should handle large numbers', () => {
    const result = pipe.transform(12345);
    expect(result).toBe('12345th');
  });
});
