import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyDifference',
  standalone: true
})
export class PfyDifferencePipe implements PipeTransform {
  transform<T>(array1: T[], array2: T[]): T[] {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
      console.warn('pfyDifference got an invalid array param', array1, array2);
      return [];
    }
    return array1.filter(item => !array2.includes(item));
  }
}
