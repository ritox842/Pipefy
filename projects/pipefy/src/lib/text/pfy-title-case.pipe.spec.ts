import {PfyTitleCasePipe} from './pfy-title-case.pipe';

describe('PfyTitleCasePipe', () => {
  let pipe: PfyTitleCasePipe;

  beforeEach(() => {
    pipe = new PfyTitleCasePipe()
  });

  it('should return an empty string for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe('');

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBe('');
  });

  it('should handle empty strings', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  it('should convert a string to title case', () => {
    const result1 = pipe.transform('hello world');
    expect(result1).toBe('Hello World');

    const result2 = pipe.transform('HELLO WORLD');
    expect(result2).toBe('Hello World');

    const result3 = pipe.transform('hello-world-123');
    expect(result3).toBe('Hello-world-123');
  });
});
