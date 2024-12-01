import { PfyCalendarPipe } from './pfy-calendar.pipe';

describe('PfyCalendarPipe', () => {
  let pipe: PfyCalendarPipe;

  beforeEach(() => {
    pipe = new PfyCalendarPipe();
  });

  it('should return "Today" for today\'s date', () => {
    const today = new Date();
    const result = pipe.transform(today);
    expect(result).toBe('Today');
  });

  it('should return "Yesterday" for yesterday\'s date', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const result = pipe.transform(yesterday);
    expect(result).toBe('Yesterday');
  });

  it('should return "Tomorrow" for tomorrow\'s date', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const result = pipe.transform(tomorrow);
    expect(result).toBe('Tomorrow');
  });

  it('should return "X days ago" for dates within a week', () => {
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    const result = pipe.transform(threeDaysAgo);
    expect(result).toBe('3 days ago');
  });

  it('should return "In X days" for dates within a week in the future', () => {
    const twoDaysLater = new Date();
    twoDaysLater.setDate(twoDaysLater.getDate() + 2);
    const result = pipe.transform(twoDaysLater);
    expect(result).toBe('In 2 days');
  });

  it('should return formatted date for dates more than a week ago or in the future', () => {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const result = pipe.transform(lastMonth);
    expect(result).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/); // Ensure it's a formatted date
  });

  it('should return an empty string for invalid dates', () => {
    const invalidDate = 'invalid date';
    const result = pipe.transform(invalidDate);
    expect(result).toBe('');
  });
});
