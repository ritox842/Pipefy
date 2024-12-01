import {PfyPadPipe} from './pfy-pad.pipe';

describe('PfyPadPipe', () => {
  let pipe: PfyPadPipe;

  beforeEach(() => {
    pipe = new PfyPadPipe();
  });

  it('should pad a number with leading zeros', () => {
    const result = pipe.transform(12, 4);
    expect(result).toBe('0012');
  });

  it('should not pad a number longer than the specified length', () => {
    const result = pipe.transform(12345, 3);
    expect(result).toBe('12345');
  });

  it('should handle negative numbers', () => {
    const result = pipe.transform(-12, 4);
    expect(result).toBe('0-12');
  });

  it('should handle decimal numbers', () => {
    const result = pipe.transform(12.34, 5);
    expect(result).toBe('12.34');
  });

  it('should handle invalid input', () => {
    const result = pipe.transform('abc' as unknown as number, 3);
    expect(result).toBe('abc');
  });
});
