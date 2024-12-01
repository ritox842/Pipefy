import {PfySumPipe} from './pfy-sum.pipe';

describe('PfySumPipe', () => {
  let pipe: PfySumPipe;

  beforeEach(() => {
    pipe = new PfySumPipe();
  });

  it('should return 0 for an empty array', () => {
    const result = pipe.transform([]);
    expect(result).toBe(0);
  });

  it('should return the sum of all numbers in a valid array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = pipe.transform(numbers);
    expect(result).toBe(15);
  });

  it('should handle arrays with non-numeric values', () => {
    const numbers = [1, 'a', 3, 4, 5];
    const result = pipe.transform(numbers as unknown as number[]);
    expect(result).toBe(13);
  });

  it('should return 0 for an invalid input', () => {
    const result = pipe.transform(null as unknown as number[]);
    expect(result).toBe(0);
  });
});
