import {PfySnakeCasePipe} from './pfy-snake-case.pipe';

describe('PfySnakeCasePipe', () => {
  let pipe: PfySnakeCasePipe;

  beforeEach(() => {
    pipe = new PfySnakeCasePipe()
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

  it('should convert a string to snake_case', () => {
    const result1 = pipe.transform('helloWorld');
    expect(result1).toBe('hello_world');

    const result2 = pipe.transform('hello_world_123');
    expect(result2).toBe('hello_world_123');

    const result3 = pipe.transform('hello-World_123');
    expect(result3).toBe('hello_world_123');

    const result4 = pipe.transform('hello World 123');
    expect(result4).toBe('hello_world_123');
  });
});
