import {PfyTruncatePipe} from './pfy-truncate.pipe';

describe('PfyTruncatePipe', () => {
  let pipe: PfyTruncatePipe;

  beforeEach(() => {
    pipe = new PfyTruncatePipe();
  });

  it('should return an empty string for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe('');

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBe('');
  });

  it('should return the full string if it is shorter than the limit', () => {
    const result = pipe.transform('Hello, world!', 15);
    expect(result).toBe('Hello, world!');
  });

  it('should truncate the string to the specified limit', () => {
    const result = pipe.transform('This is a long sentence.', 10);
    expect(result).toBe('This is a ...');
  });

  it('should handle different limit values', () => {
    const result1 = pipe.transform('Hello, world!', 5);
    expect(result1).toBe('Hello...');

    const result2 = pipe.transform('Hello, world!', 12);
    expect(result2).toBe('Hello, world...');
  });

  it('should handle different trail strings', () => {
    const result = pipe.transform('Hello, world!', 5, '...');
    expect(result).toBe('Hello...');
  });
});
