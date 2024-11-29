import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyDuration',
  standalone: true
})
export class PfyDurationPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return '0s';

    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    const parts = [];
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (seconds > 0) parts.push(`${seconds}s`);

    return parts.join(' ');
  }
}
