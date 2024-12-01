import {PfyEntriesPipe} from './pfy-entries.pipe';

describe('PfyEntriesPipe', () => {
  let pipe: PfyEntriesPipe;

  beforeEach(() => {
    pipe = new PfyEntriesPipe();
  });

  it('should return an empty array for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as Record<string, string>);
    expect(result1).toEqual([]);

    const result2 = pipe.transform(undefined as unknown as Record<string, string>);
    expect(result2).toEqual([]);
  });

  it('should return an array of key-value pairs for a valid object', () => {
    const input = { a: 1, b: 2, c: 3 };
    const result = pipe.transform(input);

    expect(result).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });

  it('should handle an empty object', () => {
    const input = {};
    const result = pipe.transform(input);
    expect(result).toEqual([]);
  });
});
