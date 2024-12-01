import { PfyAgePipe } from './pfy-age.pipe';

describe('PfyAgePipe', () => {
  let pipe: PfyAgePipe;

  beforeEach(() => {
    pipe = new PfyAgePipe();
  });

  it('should calculate age correctly for a valid Date object', () => {
    const birthDate = new Date('1990-01-15');
    const expectedAge = 34; // Assuming today's date is after 2024-01-15

    const result = pipe.transform(birthDate);

    expect(result).toEqual(expectedAge);
  });

  it('should calculate age correctly for a valid string date', () => {
    const today = new Date();
    const birthYear = today.getFullYear() - 39; // Adjust the age as needed
    const birthDateString = `${birthYear}-12-25`;

    const result = pipe.transform(birthDateString);

    expect(result).toBeGreaterThanOrEqual(38);
    expect(result).toBeLessThanOrEqual(39);
  });

  it('should return 0 for invalid or null input', () => {
    const invalidInputs = [null, undefined, 'invalid date'];

    invalidInputs.forEach(input => {
      const result = pipe.transform(input as unknown as string);
      expect(result).toEqual(0);
    });
  });

  it('should handle leap years correctly', () => {
    const leapYearBirthDate = new Date('2000-02-29');
    const expectedAge = 24; // Assuming today's date is after 2024-02-29

    const result = pipe.transform(leapYearBirthDate);

    expect(result).toEqual(expectedAge);
  });
});
