import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyTimeAgo',
  standalone: true
})
export class PfyTimeAgoPipe implements PipeTransform {
  transform(value: Date | string): string {
    if (!value) {
      console.warn('pfyTimeAgo got an invalid date param', value)
      return '';
    }

    const date = new Date(value);

    if (!date.getDate()){
      console.warn('pfyCalendar got an invalid date param', value)
      return '';
    }


    const now = new Date();
    const seconds = Math.round((now.getTime() - date.getTime()) / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);

    if (seconds < 60) return 'just now';
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 30) return `${days} days ago`;

    return date.toLocaleDateString();
  }
}
