import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyPercentage',
  standalone: true
})
export class PfyPercentagePipe implements PipeTransform {
  transform(value: number, decimals: number = 2): string {
    if (isNaN(value)) return '';
    return `${(value * 100).toFixed(decimals)}%`;
  }
}
