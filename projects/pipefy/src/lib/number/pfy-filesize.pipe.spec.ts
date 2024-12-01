import {PfyFilesizePipe} from './pfy-filesize.pipe';

describe('PfyFileSizePipe', () => {
  let pipe: PfyFilesizePipe;

  beforeEach(() => {
    pipe = new PfyFilesizePipe();
  });

  it('should return "0 Bytes" for zero bytes', () => {
    const result = pipe.transform(0);
    expect(result).toBe('0 Bytes');
  });

  it('should return the correct byte size in kilobytes', () => {
    const result = pipe.transform(1024);
    expect(result).toBe('1 KB');
  });

  it('should return the correct byte size in megabytes', () => {
    const result = pipe.transform(1048576);
    expect(result).toBe('1 MB');
  });

  it('should return the correct byte size in gigabytes', () => {
    const result = pipe.transform(1073741824);
    expect(result).toBe('1 GB');
  });

  it('should handle large byte sizes', () => {
    const result = pipe.transform(1699571629776);
    expect(result).toBe('1.55 TB');
  });

  it('should handle invalid input', () => {
    const result = pipe.transform(NaN);
    expect(result).toBe('0 Bytes');
  });

  it('should handle custom decimal places', () => {
    const result = pipe.transform(1234567, 3);
    expect(result).toBe('1.177 MB');
  });
});
