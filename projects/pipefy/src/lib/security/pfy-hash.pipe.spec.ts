import {PfyHashPipe} from './pfy-hash.pipe';

describe('PfyHashPipe', () => {
  let pipe: PfyHashPipe;

  beforeEach(() => {
    pipe = new PfyHashPipe();
  });

  it('should return an empty string for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe('');

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBe('');
  });

  it('should generate a hash for a given string', () => {
    const input = 'hello, world!';
    const result = pipe.transform(input);
    expect(result).toBe('qq3nkl'); // Note: This is a specific hash for the given input and the implementation of the hash function.
  });

  it('should handle empty strings', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  // Additional test cases to ensure robustness:
  it('should handle different string lengths', () => {
    const result1 = pipe.transform('a');
    const result2 = pipe.transform('abcdefghijklmnopqrstuvwxyz');
    expect(result1).not.toBe(result2);
  });

  it('should handle similar strings with slight differences', () => {
    const result1 = pipe.transform('hello');
    const result2 = pipe.transform('hello ');
    expect(result1).not.toBe(result2);
  });
});
