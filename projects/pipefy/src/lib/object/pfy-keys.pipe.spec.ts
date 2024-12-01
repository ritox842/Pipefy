import {PfyKeysPipe} from './pfy-keys.pipe';

describe('PfyKeysPipe', () => {
  let pipe: PfyKeysPipe;

  beforeEach(() => {
    pipe = new PfyKeysPipe();
  });

  it('should return an empty array for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as Object);
    expect(result1).toEqual([]);

    const result2 = pipe.transform(undefined as unknown as Object);
    expect(result2).toEqual([]);
  });

  it('should return an array of keys for a valid object', () => {
    const input = { a: 1, b: 2, c: 3 };
    const result = pipe.transform(input);

    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('should handle an empty object', () => {
    const input = {};
    const result = pipe.transform(input);
    expect(result).toEqual([]);
  });
});
