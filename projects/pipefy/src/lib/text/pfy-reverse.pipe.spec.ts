import {PfyReversePipe} from './pfy-reverse.pipe';

describe('PfyReversePipe', () => {
  let pipe: PfyReversePipe;

beforeEach(()=>{
  pipe = new PfyReversePipe();
})
  it('should return an empty string for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBe('');

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBe('');
  });

  it('should return an empty string for an empty string input', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  it('should reverse a string', () => {
    const result = pipe.transform('hello world');
    expect(result).toBe('dlrow olleh');
  });

  it('should handle strings with special characters', () => {
    const result = pipe.transform('Hello, World! 123');
    expect(result).toBe('321 !dlroW ,olleH');
  });
});
