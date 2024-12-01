import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyFromNow',
  standalone: true
})
export class PfyFromNowPipe implements PipeTransform {
  transform(value: Date | string): string {
    if (!value) {
      console.warn('pfyFromNow got an invalid date param', value)
      return '';
    }

    const date = new Date(value);

    if (!date.getDate()){
      console.warn('pfyCalendar got an invalid date param', value)
      return '';
    }


    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diff < 30) return 'just now';
    if (diff < 60) return `${diff} seconds ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
    if (diff < 31536000) return `${Math.floor(diff / 2592000)} months ago`;
    return `${Math.floor(diff / 31536000)} years ago`;
  }
}
