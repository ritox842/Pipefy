import {PfyIsUrlPipe} from './pfy-url.pipe';

describe('PfyIsUrlPipe', () => {
  let pipe: PfyIsUrlPipe;

  beforeEach(() => {
    pipe = new PfyIsUrlPipe();
  });

  it('should return false for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBeFalse();

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBeFalse();
  });

  it('should return false for empty string', () => {
    const result = pipe.transform('');
    expect(result).toBeFalse();
  });

  it('should return true for valid URLs', () => {
    const result1 = pipe.transform('https://www.google.com');
    expect(result1).toBeTrue();

    const result2 = pipe.transform('http://example.com/path/to/file.html');
    expect(result2).toBeTrue();
  });

  it('should return false for invalid URLs', () => {
    const result1 = pipe.transform('invalid_url');
    expect(result1).toBeFalse();

    const result2 = pipe.transform('http://');
    expect(result2).toBeFalse();
  });
});
