import { PfyTakePipe } from './pfy-take.pipe';

describe('PfyTakePipe', () => {
  let pipe: PfyTakePipe;

  beforeEach(() => {
    pipe = new PfyTakePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should take the specified number of elements from the beginning of the array', () => {
    const array = [1, 2, 3, 4, 5];
    const count = 3;
    const expected = [1, 2, 3];

    const result = pipe.transform(array, count);
    expect(result).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    const array: number[] = [];
    const count = 2;
    const expected: number[] = [];

    const result = pipe.transform(array, count);
    expect(result).toEqual(expected);
  });

  it('should handle non-array input', () => {
    const input = 'not an array';
    const count = 2;
    const expected: any[] = [];

    const result = pipe.transform<string>(input as unknown as string[], count);
    expect(result).toEqual(expected);
  });

  it('should handle taking more elements than the array length', () => {
    const array = [1, 2, 3];
    const count = 5;
    const expected = [1, 2, 3];

    const result = pipe.transform(array, count);
    expect(result).toEqual(expected);
  });
});
