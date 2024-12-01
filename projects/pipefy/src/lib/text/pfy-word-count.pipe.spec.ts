import {PfyWordCountPipe} from './pfy-word-count.pipe';

describe('PfyWordCountPipe', () => {
  let pipe: PfyWordCountPipe;

  beforeEach(() => {
    pipe = new PfyWordCountPipe()
  });

  it('should return 0 for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe(0);

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBe(0);
  });

  it('should return 0 for an empty string', () => {
    const result = pipe.transform('');
    expect(result).toBe(0);
  });

  it('should count words in a simple sentence', () => {
    const result = pipe.transform('Hello, world!');
    expect(result).toBe(2);
  });

  it('should handle multiple spaces between words', () => {
    const result = pipe.transform('Hello   world!');
    expect(result).toBe(2);
  });

  it('should handle leading and trailing whitespace', () => {
    const result = pipe.transform('   Hello, world!   ');
    expect(result).toBe(2);
  });

  it('should handle special characters', () => {
    const result = pipe.transform('Hello, world!@#%^&*()');
    expect(result).toBe(2);
  });
});
