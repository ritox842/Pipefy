import {PfyPercentagePipe} from './pfy-percentage.pipe';

describe('PfyPercentagePipe', () => {
  let pipe: PfyPercentagePipe;

  beforeEach(() => {
    pipe = new PfyPercentagePipe();
  });

  it('should return an empty string for non-numeric input', () => {
    const result = pipe.transform('abc' as unknown as number);
    expect(result).toBe('');
  });

  it('should return the correct percentage for a decimal value', () => {
    const result = pipe.transform(0.5);
    expect(result).toBe('50.00%');
  });

  it('should handle integer values', () => {
    const result = pipe.transform(1);
    expect(result).toBe('100.00%');
  });

  it('should handle negative values', () => {
    const result = pipe.transform(-0.25);
    expect(result).toBe('-25.00%');
  });

  it('should handle custom decimal places', () => {
    const result = pipe.transform(0.12345, 3);
    expect(result).toBe('12.345%');
  });
});
