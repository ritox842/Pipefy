import {PfyInitialsPipe} from './pfy-initials.pipe';

describe('PfyInitialsPipe', () => {
  let pipe: PfyInitialsPipe;

  beforeEach(() => {
    pipe = new PfyInitialsPipe();
  });

  it('should return an empty string for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe('');

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBe('');
  });

  it('should return an empty string for an empty string input', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  it('should return the initials of a single-word name', () => {
    const result = pipe.transform('John');
    expect(result).toBe('J');
  });

  it('should return the initials of a multi-word name', () => {
    const result = pipe.transform('John Doe');
    expect(result).toBe('JD');

    const result2 = pipe.transform('John Doe Smith');
    expect(result2).toBe('JDS');
  });

  it('should handle names with special characters', () => {
    const result = pipe.transform('O');
    expect(result).toBe('O');
  });
});
