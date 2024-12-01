import {PfyPickPipe} from './pfy-pick.pipe';

describe('PfyPickPipe', () => {
  let pipe: PfyPickPipe;

  type obj = { a: 1, b: 2, c: 3, d: 4 };
  beforeEach(() => {
    pipe = new PfyPickPipe();
  });

  it('should return an empty object for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as obj, ['a', 'b']);
    expect(result1).toEqual({} as unknown as obj);

    const result2 = pipe.transform(undefined as unknown as obj, ['a', 'b']);
    expect(result2).toEqual({} as unknown as obj);
  });

  it('should pick specified keys', () => {
    const obj = {a: 1, b: 2, c: 3};
    const result = pipe.transform(obj, ['a', 'c']);
    expect(result).toEqual({a: 1, c: 3});
  });

  it('should handle empty key array', () => {
    const obj = {a: 1, b: 2, c: 3};
    const result = pipe.transform(obj, []);
    expect(result).toEqual({});
  });

  it('should handle keys not present in the object', () => {
    const obj = {a: 1, b: 2};
    const result = pipe.transform(obj as unknown as obj, ['c', 'd']);
    expect(result).toEqual({} as unknown as obj);
  });
});
