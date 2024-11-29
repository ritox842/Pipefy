import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyInitials',
  standalone: true
})
export class PfyInitialsPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  }
}
