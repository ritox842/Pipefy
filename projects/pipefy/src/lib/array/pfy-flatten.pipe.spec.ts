import { PfyFlattenPipe } from './pfy-flatten.pipe';

describe('PfyFlattenPipe', () => {
  let pipe: PfyFlattenPipe;

  beforeEach(() => {
    pipe = new PfyFlattenPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should flatten a simple array', () => {
    const array = [1, 2, 3];
    const expected = [1, 2, 3];

    const result = pipe.transform(array);
    expect(result).toEqual(expected);
  });

  it('should flatten a nested array', () => {
    const array = [1, [2, 3], 4, [5, 6, [7]]];
    const expected = [1, 2, 3, 4, 5, 6, 7];

    const result = pipe.transform(array);
    expect(result).toEqual(expected);
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

  it('should handle mixed data types', () => {
    const array = [1, 'a', [2, 'b'], 3];
    const expected = [1, 'a', 2, 'b', 3];

    const result = pipe.transform(array);
    expect(result).toEqual(expected);
  });
});
