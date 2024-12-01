import {PfyValuesPipe} from './pfy-values.pipe';

describe('PfyValuesPipe', () => {
  let pipe: PfyValuesPipe;

  beforeEach(() => {
    pipe = new PfyValuesPipe();
  });

  it('should return an empty array for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as Record<any, any>);
    expect(result1).toEqual([]);

    const result2 = pipe.transform(undefined as unknown as Record<any, any>);
    expect(result2).toEqual([]);
  });

  it('should return an array of values for a valid object', () => {
    const input = { a: 1, b: 2, c: 3 };
    const result = pipe.transform(input);

    expect(result).toEqual([1, 2, 3]);
  });

  it('should handle an empty object', () => {
    const input = {};
    const result = pipe.transform(input);
    expect(result).toEqual([]);
  });
});
