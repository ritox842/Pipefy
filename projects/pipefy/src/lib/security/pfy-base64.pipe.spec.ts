import {PfyBase64Pipe} from './pfy-base64.pipe';

describe('PfyBase64Pipe', () => {
  let pipe: PfyBase64Pipe;

  beforeEach(() => {
    pipe = new PfyBase64Pipe();
  });

  it('should return an empty string for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe('');

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBe('');
  });

  it('should encode a string to base64', () => {
    const input = 'Hello, World!';
    const result = pipe.transform(input);
    expect(result).toBe('SGVsbG8sIFdvcmxkIQ==');
  });

  it('should decode a base64 string', () => {
    const input = 'SGVsbG8sIFdvcmxkIQ==';
    const result = pipe.transform(input, true);
    expect(result).toBe('Hello, World!');
  });

  it('should handle empty strings', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });
});
