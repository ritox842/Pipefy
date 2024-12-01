import {PfyTimeAgoPipe} from './pfy-time-ago.pipe';

describe('PfyTimeAgoPipe', () => {
  let pipe: PfyTimeAgoPipe;

  beforeEach(() => {
    pipe = new PfyTimeAgoPipe();
  });

  it('should return "just now" for recent dates', () => {
    const recentDate = new Date();
    recentDate.setSeconds(recentDate.getSeconds() - 10);

    const result = pipe.transform(recentDate);
    expect(result).toBe('just now');
  });

  it('should return "X minutes ago" for dates within an hour', () => {
    const pastDate = new Date();
    pastDate.setMinutes(pastDate.getMinutes() - 30);

    const result = pipe.transform(pastDate);
    expect(result).toBe('30 minutes ago');
  });

  it('should return "X hours ago" for dates within a day', () => {
    const pastDate = new Date();
    pastDate.setHours(pastDate.getHours() - 3);

    const result = pipe.transform(pastDate);
    expect(result).toBe('3 hours ago');
  });

  it('should return "X days ago" for dates within a month', () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 2);

    const result = pipe.transform(pastDate);
    expect(result).toBe('2 days ago');
  });

  it('should return formatted date for older dates', () => {
    const pastDate = new Date();
    pastDate.setMonth(pastDate.getMonth() - 2);

    const expectedDate = pastDate.toLocaleDateString();
    const result = pipe.transform(pastDate);
    expect(result).toBe(expectedDate);
  });

  it('should handle invalid dates', () => {
    const invalidDate = 'invalid_date';
    const result = pipe.transform(invalidDate);
    expect(result).toBe('');
  });

  it('should handle dates with invalid date', () => {
    const invalidDate = 'Invalid Date';
    const result = pipe.transform(invalidDate);
    expect(result).toBe('');
  });
});
