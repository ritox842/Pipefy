import {PfyCamelCasePipe} from './pfy-camel-case.pipe';

describe('PfyCamelCasePipe', () => {
  let pipe: PfyCamelCasePipe;

  beforeEach(() => {
    pipe = new PfyCamelCasePipe();
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

  it('should convert a string to camelCase', () => {
    const result1 = pipe.transform('hello world');
    expect(result1).toBe('helloWorld');

    const result2 = pipe.transform('HELLO WORLD');
    expect(result2).toBe('helloWorld');

    const result3 = pipe.transform('hello-world-123');
    expect(result3).toBe('helloWorld123');

    const result4 = pipe.transform('hello_world_123');
    expect(result4).toBe('helloWorld123');
  });
});
