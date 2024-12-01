import {PfyKebabCasePipe} from './pfy-kebab-case.pipe';

describe('PfyKebabCasePipe', () => {
  let pipe: PfyKebabCasePipe;

  beforeEach(() => {
    pipe = new PfyKebabCasePipe()
  })

  it('should return an empty string for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe('');

    const result2 = pipe.transform(null as unknown as string);
    expect(result2).toBe('');
  });

  it('should handle empty strings', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  it('should convert a string to kebab-case', () => {
    const result1 = pipe.transform('helloWorld');
    expect(result1).toBe('hello-world');

    const result2 = pipe.transform('helloWorld123');
    expect(result2).toBe('hello-world123');

    const result3 = pipe.transform('hello_world_123');
    expect(result3).toBe('hello-world-123');

    const result4 = pipe.transform('hello-World_123');
    expect(result4).toBe('hello-world-123');
  });
});
