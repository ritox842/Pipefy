import {PfyFromNowPipe} from './pfy-from-now.pipe';

describe('PfyFromNowPipe', () => {
  let pipe: PfyFromNowPipe;

  beforeEach(() => {
    pipe = new PfyFromNowPipe();
  });

  it('should return "just now" for recent dates', () => {
    const recentDate = new Date();
    recentDate.setSeconds(recentDate.getSeconds() - 10);

    const result = pipe.transform(recentDate);
    expect(result).toBe('just now');
  });

  it('should return "X seconds ago" for dates within a minute', () => {
    const pastDate = new Date();
    pastDate.setSeconds(pastDate.getSeconds() - 30);

    const result = pipe.transform(pastDate);
    expect(result).toBe('30 seconds ago');
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

  it('should return "X months ago" for dates within a year', () => {
    const pastDate = new Date();
    pastDate.setMonth(pastDate.getMonth() - 2);

    const result = pipe.transform(pastDate);
    expect(result).toBe('2 months ago');
  });

  it('should return "X years ago" for dates more than a year ago', () => {
    const pastDate = new Date();
    pastDate.setFullYear(pastDate.getFullYear() - 2);

    const result = pipe.transform(pastDate);
    expect(result).toBe('2 years ago');
  });

  it('should handle invalid dates', () => {
    const result = pipe.transform('invalid_date');
    expect(result).toBe('');
  });
});
