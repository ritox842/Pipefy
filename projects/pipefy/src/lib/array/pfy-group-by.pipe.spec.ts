import { PfyGroupByPipe } from './pfy-group-by.pipe';

describe('PfyGroupByPipe', () => {
  let pipe: PfyGroupByPipe;

  beforeEach(() => {
    pipe = new PfyGroupByPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should group elements by a specified key', () => {
    const array = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 25 },
    ];
    const key = 'age';
    const expected = {
      '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
      '30': [{ name: 'Bob', age: 30 }],
    };

    const result = pipe.transform(array, key);
    expect(result).toEqual(expected);
  });

  it('should handle empty array', () => {
    const array: any[] = [];
    const key = 'anyKey';
    const expected = {};

    const result = pipe.transform(array, key);
    expect(result).toEqual(expected);
  });

  it('should handle non-array input', () => {
    const input = 'not an array';
    const key = 'anyKey';
    const expected = {};

    const result = pipe.transform<string>(input as unknown as string[], key as unknown as keyof string);
    expect(result).toEqual(expected);
  });

  it('should handle missing key', () => {
    const array = [{ name: 'Alice' }, { name: 'Bob' }];
    const key = 'age';
    const expected = {};

    const result = pipe.transform(array, key as unknown as keyof { name: string });
    expect(result).toEqual(expected);
  });
});
