import {PfyIsPhonePipe} from './pfy-phone.pipe';

describe('PfyIsPhonePipe', () => {
  let pipe: PfyIsPhonePipe;

  beforeEach(() => {
    pipe = new PfyIsPhonePipe();
  });

  it('should return false for null or undefined input', () => {
    const result1 = pipe.transform(null as unknown as string);
    expect(result1).toBeFalse();

    const result2 = pipe.transform(undefined as unknown as string);
    expect(result2).toBeFalse();
  });

  it('should return false for empty string', () => {
    const result = pipe.transform('');
    expect(result).toBeFalse();
  });

  it('should return true for valid phone numbers', () => {
    const result1 = pipe.transform('1234567890');
    expect(result1).toBeTrue();

    const result2 = pipe.transform('+1 234-567-8901');
    expect(result2).toBeTrue();

    const result3 = pipe.transform('1234567890');
    expect(result3).toBeTrue();

    const result5 = pipe.transform('123.456.7890');
    expect(result5).toBeTrue();

    const result6 = pipe.transform('123 456 7890');
    expect(result6).toBeTrue();
  });

  it('should return false for invalid phone numbers', () => {
    const result1 = pipe.transform('abc123');
    expect(result1).toBeFalse();

    const result2 = pipe.transform('123-456-789012343434434334');
    expect(result2).toBeFalse();

    const result3 = pipe.transform('+1234567');
    expect(result3).toBeFalse();

    const result4 = pipe.transform('01234567890123');
    expect(result4).toBeFalse();
  });
});
