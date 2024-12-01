import { PfyDurationPipe } from './pfy-duration.pipe';

describe('PfyDurationPipe', () => {
  let pipe: PfyDurationPipe;

  beforeEach(() => {
    pipe = new PfyDurationPipe();
  });

  it('should return "0s" for zero seconds', () => {
    const result = pipe.transform(0);
    expect(result).toBe('0s');
  });

  it('should return correct duration for seconds', () => {
    const result = pipe.transform(30);
    expect(result).toBe('30s');
  });

  it('should return correct duration for minutes', () => {
    const result = pipe.transform(120);
    expect(result).toBe('2m');
  });

  it('should return correct duration for hours', () => {
    const result = pipe.transform(3600);
    expect(result).toBe('1h');
  });

  it('should return correct duration for hours, minutes, and seconds', () => {
    const result = pipe.transform(3720);
    expect(result).toBe('1h 2m');
  });

  it('should handle large durations', () => {
    const result = pipe.transform(86400); // 24 hours
    expect(result).toBe('24h');
  });

  it('should handle negative durations', () => {
    const result = pipe.transform(-30);
    expect(result).toBe('0s'); // Or you might want to handle negative durations differently, e.g., by returning a negative sign
  });
});
