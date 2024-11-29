import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyAverage',
  standalone: true
})
export class PfyAveragePipe implements PipeTransform {
  transform(array: number[]): number {
    if (!Array.isArray(array) || array.length === 0) return 0;
    const sum = array.reduce((acc, num) => acc + (isNaN(num) ? 0 : num), 0);
    return sum / array.length;
  }
}
