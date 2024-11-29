import { PfyIntersectionPipe } from './pfy-intersection.pipe';

describe('PfyIntersectionPipe', () => {
  let pipe: PfyIntersectionPipe;

  beforeEach(() => {
    pipe = new PfyIntersectionPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should find the intersection of two arrays', () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    const expected = [3, 4, 5];

    const result = pipe.transform(array1, array2);
    expect(result).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    const array1: number[] = [];
    const array2 = [1, 2, 3];
    const expected: number[] = [];

    const result = pipe.transform(array1, array2);
    expect(result).toEqual(expected);

    const result2 = pipe.transform(array2, array1);
    expect(result2).toEqual(expected);
  });

  it('should handle non-array input', () => {
    const array1 = 'not an array' as unknown as number[];
    const array2 = [1, 2, 3];
    const expected: any[] = [];

    const result = pipe.transform(array1, array2);
    expect(result).toEqual(expected);

    const result2 = pipe.transform(array2, array1);
    expect(result2).toEqual(expected);
  });

  it('should handle arrays with duplicate elements', () => {
    const array1 = [1, 2, 3, 1, 2];
    const array2 = [2, 3, 4, 2, 3];
    const expected = [2, 3, 2];

    const result = pipe.transform(array1, array2);
    expect(result).toEqual(expected);
  });
});
