import {PfyDateFormatPipe} from './pfy-format.pipe';

fdescribe('PfyDateFormatPipe', () => {
  let pipe: PfyDateFormatPipe;

  beforeEach(() => {
    pipe = new PfyDateFormatPipe();
  });

  it('should handle invalid input', () => {
    const invalidInputs = [null, undefined, 'invalid date'];

    invalidInputs.forEach(input => {
      const result = pipe.transform(input as unknown as string);

      expect(result).toBe('');
    });
  });

  it('should format date correctly with default format', () => {
    const date = new Date('2023-11-22');
    const result = pipe.transform(date);
    expect(result).toBe('2023-11-22');
  });

  it('should format date correctly with custom format', () => {
    const date = new Date('2023-11-22');
    const result = pipe.transform(date, 'dd/MM/yyyy');
    expect(result).toBe('22/11/2023');
  });

  it('should handle time formatting', () => {
    const date = new Date('2023-11-22T15:30:45');
    const result = pipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
    expect(result).toBe('22/11/2023 15:30:45');
  });

  it('should handle invalid format strings', () => {
    const date = new Date('2023-11-22');
    const result = pipe.transform(date, 'invalid format');
    expect(result).toBe('2023-11-22'); // Default format is used
  });

  it('should handle leap years', () => {
    const leapYearDate = new Date('2024-02-29');
    const result = pipe.transform(leapYearDate, 'dd/MM/yyyy');
    expect(result).toBe('29/02/2024');
  });
});
