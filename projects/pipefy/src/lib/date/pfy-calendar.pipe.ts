import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyCalendar',
  standalone: true
})
export class PfyCalendarPipe implements PipeTransform {
  transform(value: Date | string): string {
    const date = new Date(value);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days === -1) return 'Tomorrow';
    if (days > 1 && days < 7) return `${days} days ago`;
    if (days < -1 && days > -7) return `In ${Math.abs(days)} days`;

    return date.toLocaleDateString();
  }
}
