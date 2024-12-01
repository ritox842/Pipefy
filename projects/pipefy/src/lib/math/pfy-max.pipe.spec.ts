import {PfyMaxPipe} from './pfy-max.pipe';

describe('PfyMaxPipe', () => {
  let pipe: PfyMaxPipe;

  beforeEach(() => {
    pipe = new PfyMaxPipe();
  });

  it('should return 0 for an empty array', () => {
    const result = pipe.transform([]);
    expect(result).toBe(0);
  });

  it('should return the maximum value for a valid array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = pipe.transform(numbers);
    expect(result).toBe(5);
  });

  it('should handle arrays with negative numbers', () => {
    const numbers = [-1, 2, -3, 4, -5];
    const result = pipe.transform(numbers);
    expect(result).toBe(4);
  });

  it('should return 0 for an invalid input', () => {
    const result = pipe.transform(null as unknown as number[]);
    expect(result).toBe(0);
  });
});
