import {PfyBytesPipe} from './pfy-bytes.pipe';

describe('PfyBytesPipe', () => {
  let pipe: PfyBytesPipe;

  beforeEach(() => {
    pipe = new PfyBytesPipe();
  });

  it('should return "0 B" for zero bytes', () => {
    const result = pipe.transform(0);
    expect(result).toBe('0 B');
  });

  it('should return the correct byte size in bytes', () => {
    const result = pipe.transform(1024);
    expect(result).toBe('1.00 KB');
  });

  it('should return the correct byte size in kilobytes', () => {
    const result = pipe.transform(1048576);
    expect(result).toBe('1.00 MB');
  });

  it('should return the correct byte size in megabytes', () => {
    const result = pipe.transform(1073741824);
    expect(result).toBe('1.00 GB');
  });

  it('should handle large byte sizes', () => {
    const result = pipe.transform(1099511627776);
    expect(result).toBe('1.00 TB');
  });

  it('should handle invalid input', () => {
    const result = pipe.transform(NaN);
    expect(result).toBe('0 B');
  });

  it('should handle custom precision', () => {
    const result = pipe.transform(1234567, 3);
    expect(result).toBe('1.177 MB');
  });
});
