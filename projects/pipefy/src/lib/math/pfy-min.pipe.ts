import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyMin',
  standalone: true
})
export class PfyMinPipe implements PipeTransform {
  transform(array: number[]): number {
    if (!Array.isArray(array) || array.length === 0) return 0;
    return Math.min(...array);
  }
}
