import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyReverse',
  standalone: true
})
export class PfyReversePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.split('').reverse().join('');
  }
}
