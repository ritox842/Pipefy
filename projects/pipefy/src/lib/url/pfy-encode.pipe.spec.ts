import {PfyUrlEncodePipe} from './pfy-encode.pipe';

describe('PfyUrlEncodePipe', () => {
  let pipe: PfyUrlEncodePipe;

  beforeEach(() => {
    pipe = new PfyUrlEncodePipe()
  });

  it('should return an empty string for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe('');

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBe('');
  });

  it('should encode a simple string', () => {
    const result = pipe.transform('Hello, World!');
    expect(result).toBe('Hello%2C%20World!');
  });

  it('should encode a string with special characters', () => {
    const result = pipe.transform('Héllö, Wørld!');
    expect(result).toBe('H%C3%A9ll%C3%B6%2C%20W%C3%B8rld!');
  });
});
