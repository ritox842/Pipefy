import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfyRoundPipe } from './pfy-round.pipe';
import {PfyRomanPipe} from './pfy-roman.pipe';

describe('PfyRoundPipe', () => {
  let pipe: PfyRoundPipe;

  beforeEach(() => {
    pipe = new PfyRoundPipe();
  });

  it('should return 0 for NaN input', () => {
    const result = pipe.transform(NaN);
    expect(result).toBe(0);
  });

  it('should round to the nearest integer by default', () => {
    const result = pipe.transform(3.14159);
    expect(result).toBe(3);
  });

  it('should round to the specified number of decimal places', () => {
    const result = pipe.transform(3.14159, 2);
    expect(result).toBe(3.14);
  });

  it('should handle negative numbers', () => {
    const result = pipe.transform(-2.71828, 1);
    expect(result).toBe(-2.7);
  });

  it('should handle large numbers', () => {
    const result = pipe.transform(123456789.123, 2);
    expect(result).toBe(123456789.12);
  });
});
