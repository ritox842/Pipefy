import {PfyUrlDecodePipe} from './pfy-decode.pipe';

describe('PfyUrlDecodePipe', () => {
  let pipe: PfyUrlDecodePipe;

  beforeEach(() => {
    pipe = new PfyUrlDecodePipe()
  });

  it('should return an empty string for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe('');

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBe('');
  });

  it('should return the original string for an already decoded string', () => {
    const result = pipe.transform('Hello, World!');
    expect(result).toBe('Hello, World!');
  });

  it('should decode a URL-encoded string', () => {
    const result = pipe.transform('Hello%20World%21');
    expect(result).toBe('Hello World!');
  });

  it('should handle complex URL-encoded strings', () => {
    const result = pipe.transform('H%C3%A9llo%2C%20W%C3%B6rld%21');
    expect(result).toBe('Héllo, Wörld!');
  });

  it('should handle invalid URL-encoded strings', () => {
    const result = pipe.transform('%invalid%');
    expect(result).toBe('');
  });
});
