import {PfyOmitPipe} from './pfy-omit.pipe';

describe('PfyOmitPipe', () => {
  let pipe: PfyOmitPipe;
  type obj = { a: 1, b: 2, c: 3, d:4 };
  beforeEach(() => {
    pipe = new PfyOmitPipe();
  });

  it('should return an empty object for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as obj, ['a', 'b']);
    expect(result1).toEqual({} as unknown as obj);

    const result2 = pipe.transform(undefined as unknown as obj, ['a', 'b']);
    expect(result2).toEqual({} as unknown as obj);
  });

  it('should omit specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pipe.transform(obj, ['a', 'c']);
    expect(result).toEqual({ b: 2 });
  });

  it('should handle empty key array', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pipe.transform(obj, []);
    expect(result).toEqual(obj);
  });

  it('should handle keys not present in the object', () => {
    const obj = { a: 1, b: 2 };
    const result = pipe.transform(obj as unknown as obj, ['c', 'd']);
    expect(result).toEqual(obj as unknown as obj);
  });
});
