import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyIntersection',
  standalone: true
})
export class PfyIntersectionPipe implements PipeTransform {
  transform<T>(array1: T[], array2: T[]): T[] {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return [];
    return array1.filter(item => array2.includes(item));
  }
}
