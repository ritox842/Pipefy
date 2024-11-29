import { PfyDropPipe } from './pfy-drop.pipe';

describe('PfyDropPipe', () => {
  let pipe: PfyDropPipe;

  beforeEach(() => {
    pipe = new PfyDropPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should drop the specified number of elements from the beginning of the array', () => {
    const array = [1, 2, 3, 4, 5];
    const expected = [3, 4, 5];

    const result = pipe.transform(array, 2);
    expect(result).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    const array: number[] = [];
    const expected: number[] = [];

    const result = pipe.transform(array, 2);
    expect(result).toEqual(expected);
  });

  it('should handle non-array input', () => {
    const input = 'not an array';
    const expected: any[] = [];

    const result = pipe.transform<string>(input as unknown as string[], 2);
    expect(result).toEqual(expected);
  });

  it('should handle dropping more elements than the array length', () => {
    const array = [1, 2, 3];
    const expected: number[] = [];

    const result = pipe.transform(array, 5);
    expect(result).toEqual(expected);
  });
});
