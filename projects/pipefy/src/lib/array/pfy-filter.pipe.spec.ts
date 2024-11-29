import { PfyFilterPipe } from './pfy-filter.pipe';

describe('PfyFilterPipe', () => {
  let pipe: PfyFilterPipe;

  beforeEach(() => {
    pipe = new PfyFilterPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter an array of objects by a specific key', () => {
    const array = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 28 },
    ];
    const searchText = 'li';
    const key = 'name';
    const expected = [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 28 }];

    const result = pipe.transform(array, searchText, key);
    expect(result).toEqual(expected);
  });

  it('should filter an array of simple values', () => {
    const array = ['apple', 'banana', 'orange', 'pineapple'];
    const searchText = 'an';
    const expected = ['banana', 'orange'];

    const result = pipe.transform(array, searchText);
    expect(result).toEqual(expected);
  });

  it('should return the original array if search text is empty', () => {
    const array = [1, 2, 3, 4, 5];
    const searchText = '';
    const expected = [1, 2, 3, 4, 5];

    const result = pipe.transform(array, searchText);
    expect(result).toEqual(expected);
  });

  it('should handle non-array input', () => {
    const input = 'not an array';
    const searchText = 'test';
    const expected = input;

    const result = pipe.transform<string>(input as unknown as string[], searchText);
    expect(result).toEqual(expected);
  });

  it('should handle null or undefined search text', () => {
    const array = [1, 2, 3, 4, 5];
    const searchText = null;
    const expected = array;

    const result = pipe.transform(array, searchText as unknown as string);
    expect(result).toEqual(expected);
  });
});
