import {PfySlugifyPipe} from './pfy-slugify.pipe';

describe('PfySlugifyPipe', () => {
  let pipe: PfySlugifyPipe;

  beforeEach(() => {
    pipe = new PfySlugifyPipe()
  })

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

  it('should slugify a string', () => {
    const result1 = pipe.transform('Hello, World!');
    expect(result1).toBe('hello-world');

    const result2 = pipe.transform('This is a Test String');
    expect(result2).toBe('this-is-a-test-string');

    const result3 = pipe.transform('Hello-World!_123');
    expect(result3).toBe('hello-world_123');
  });

  it('should handle special characters', () => {
    const result = pipe.transform('Hello, World!@#%^&*()');
    expect(result).toBe('hello-world');
  });
});
