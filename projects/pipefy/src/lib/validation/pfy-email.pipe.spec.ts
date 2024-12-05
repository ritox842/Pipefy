import {PfyIsEmailPipe} from './pfy-email.pipe';
import {TestBed} from '@angular/core/testing';

describe('PfyIsEmailPipe', () => {
  let pipe: PfyIsEmailPipe;

  beforeEach(() => {
    TestBed.runInInjectionContext(() => {
      pipe = new PfyIsEmailPipe();
    });
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

  it('should return true for valid email addresses', () => {
    const result1 = pipe.transform('john.doe@example.com');
    expect(result1).toBeTrue();

    const result2 = pipe.transform('jane_doe@example.co.uk');
    expect(result2).toBeTrue();

    const result3 = pipe.transform('user.name+tag+x@example.com');
    expect(result3).toBeTrue();
  });

  it('should return false for invalid email addresses', () => {
    const result1 = pipe.transform('invalid_email');
    expect(result1).toBeFalse();

    const result2 = pipe.transform('john.doe@example');
    expect(result2).toBeFalse();

    const result3 = pipe.transform('john.doe@example.@com');
    expect(result3).toBeFalse();
  });
});
