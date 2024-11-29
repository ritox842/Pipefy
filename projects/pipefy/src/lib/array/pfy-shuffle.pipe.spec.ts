import { PfyShufflePipe } from './pfy-shuffle.pipe';

describe('PfyShufflePipe', () => {
  let pipe: PfyShufflePipe;

  beforeEach(() => {
    pipe = new PfyShufflePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should shuffle an array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pipe.transform(array);

    // We can't assert the exact order, but we can check if the result is a permutation of the original array
    expect(result.length).toBe(array.length);
    expect(result.every(item => array.includes(item))).toBeTrue();
  });

  it('should handle empty arrays', () => {
    const array: number[] = [];
    const expected: number[] = [];

    const result = pipe.transform(array);
    expect(result).toEqual(expected);
  });

  it('should handle non-array input', () => {
    const input = 'not an array';
    const expected: any[] = [];

    const result = pipe.transform<string>(input as unknown as string[]);
    expect(result).toEqual(expected);
  });

  // To test randomness, we can run the shuffle multiple times and check if the results are different
  it('should produce different results on multiple runs', () => {
    const array = [1, 2, 3];
    const results = [];

    for (let i = 0; i < 10; i++) {
      results.push(pipe.transform(array));
    }

    // We can't guarantee all results will be different, but we can check if there's enough variation
    expect(new Set(results.map((results)=>JSON.stringify(results))).size).toBeGreaterThan(1);
  });
});
