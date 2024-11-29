import { PfySortPipe } from './pfy-sort.pipe';

describe('PfySortPipe', () => {
  let pipe: PfySortPipe;

  beforeEach(() => {
    pipe = new PfySortPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort numbers', () => {
    expect(pipe.transform([3, 1, 2])).toEqual([1, 2, 3]);
  });

  it('should sort strings', () => {
    expect(pipe.transform(['c', 'a', 'b'])).toEqual(['a', 'b', 'c']);
  });

  it('should sort by object key', () => {
    const input = [
      { id: 3, name: 'c' },
      { id: 1, name: 'a' },
      { id: 2, name: 'b' }
    ];
    const expected = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' }
    ];
    expect(pipe.transform(input, 'id')).toEqual(expected);
  });

  it('should handle empty array', () => {
    expect(pipe.transform([])).toEqual([]);
  });

  it('should handle null', () => {
    expect(pipe.transform(null as unknown as any[])).toBeNull();
  });
});
