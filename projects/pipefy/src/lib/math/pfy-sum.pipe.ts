import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfySum',
  standalone: true
})
export class PfySumPipe implements PipeTransform {
  transform(array: number[]): number {
    if (!Array.isArray(array)) return 0;
    return array.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }
}
