import {PfyUniquePipe} from './pfy-unique.pipe';

describe('PfyUniquePipe', () => {
  let pipe: PfyUniquePipe;

  beforeEach(() => {
    pipe = new PfyUniquePipe();
  });

  it('should return the same value if not an array', () => {
    const value = 'not an array';
    expect(pipe.transform(value as unknown as string[])).toBe(value);
  });

  it('should remove duplicates without a key', () => {
    const value = [1, 1, 2, 2, 3];
    const expected = [1, 2, 3];
    expect(pipe.transform(value)).toEqual(expected);
  });

  it('should remove duplicates based on the provided key', () => {
    const value = [{ name: 'John', id: 1 }, { name: 'Jane', id: 1 }, { name: 'Mike', id: 2 }];
    const expected = [{ name: 'Jane', id: 1 }, { name: 'Mike', id: 2 }];
    expect(pipe.transform(value, 'id')).toEqual(expected);
  });
});
