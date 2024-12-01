import {PfyTrimPipe} from './pfy-trim.pipe';

describe('PfyTrimPipe', () => {
  let pipe: PfyTrimPipe;

  beforeEach(() => {
    pipe = new PfyTrimPipe()
  });

  it('should return an empty string for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe('');

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBe('');
  });

  it('should trim whitespace from the beginning and end', () => {
    const result = pipe.transform('  Hello, World!  ');
    expect(result).toBe('Hello, World!');
  });

  it('should trim specific characters from the beginning and end', () => {
    const result = pipe.transform('---Hello, World!---', '-');
    expect(result).toBe('Hello, World!');
  });

  it('should handle strings with only trimmable characters', () => {
    const result = pipe.transform('---+++', '-+');
    expect(result).toBe('');
  });

  it('should not modify strings without trimmable characters', () => {
    const result = pipe.transform('Hello, World!');
    expect(result).toBe('Hello, World!');
  });
});
