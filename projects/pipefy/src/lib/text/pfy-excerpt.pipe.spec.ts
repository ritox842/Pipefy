import {PfyExcerptPipe} from './pfy-excerpt.pipe';

describe('PfyExcerptPipe', () => {
  let pipe: PfyExcerptPipe;

  beforeEach(() => {
    pipe = new PfyExcerptPipe();
  });

  it('should return an empty string for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe('');

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBe('');
  });

  it('should return the full string if it is shorter than the word limit', () => {
    const result = pipe.transform('This is a short sentence.', 10);
    expect(result).toBe('This is a short sentence.');
  });

  it('should truncate the string to the specified word limit', () => {
    const result = pipe.transform('This is a longer sentence with many words.', 5);
    expect(result).toBe('This is a longer sentence...');
  });

  it('should handle strings with different word lengths', () => {
    const result1 = pipe.transform('A very long word', 2);
    expect(result1).toBe('A very...');

    const result2 = pipe.transform('A very very long word', 2);
    expect(result2).toBe('A very...');
  });

  it('should handle strings with special characters', () => {
    const result = pipe.transform('This is a sentence with & special characters.', 5);
    expect(result).toBe('This is a sentence with...');
  });
});
