import {PfyMaskPipe} from './pfy-mask.pipe';

describe('PfyMaskPipe', () => {
  let pipe: PfyMaskPipe;

  beforeEach(() => {
    pipe = new PfyMaskPipe()
  });

  it('should return an empty string for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe('');

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBe('');
  });

  it('should return the full string if it is shorter than the showLast value', () => {
    const result = pipe.transform('12345','#', 2);
    expect(result).toBe('###45');
  });

  it('should mask the specified number of characters', () => {
    const result = pipe.transform('1234567890', '#', 4);
    expect(result).toBe('######7890');
  });

  it('should handle different mask characters', () => {
    const result = pipe.transform('1234567890', '#', 4);
    expect(result).toBe('######7890');
  });

  it('should handle empty strings', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });
});
