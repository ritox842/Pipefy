import { PfyCapitalizePipe } from './pfy-capitalize.pipe';

describe('PfyCapitalizePipe', () => {
  let pipe: PfyCapitalizePipe;

  beforeEach(() => {
    pipe = new PfyCapitalizePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize first letter', () => {
    expect(pipe.transform('hello')).toBe('Hello');
  });

  it('should handle empty string', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should handle null', () => {
    expect(pipe.transform(null as unknown as string)).toBe('');
  });

  it('should lowercase rest of string', () => {
    expect(pipe.transform('hELLo')).toBe('Hello');
  });
});
