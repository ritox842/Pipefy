import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfySort',
  standalone: true
})
export class PfySortPipe implements PipeTransform {
  transform(array: any[], key?: string): any[] {
    if (!Array.isArray(array)) {
      console.warn('pfySort got an invalid array param', array)
      return array;
    }

    return array.sort((a, b) => {
      const valueA = key ? a[key] : a;
      const valueB = key ? b[key] : b;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB);
      }
      return valueA - valueB;
    });
  }
}
