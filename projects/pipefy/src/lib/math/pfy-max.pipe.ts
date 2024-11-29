import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyMax',
  standalone: true
})
export class PfyMaxPipe implements PipeTransform {
  transform(array: number[]): number {
    if (!Array.isArray(array) || array.length === 0) return 0;
    return Math.max(...array);
  }
}
