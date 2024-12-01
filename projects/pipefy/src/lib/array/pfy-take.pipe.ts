import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyTake',
  standalone: true
})
export class PfyTakePipe implements PipeTransform {
  transform<T>(array: T[], count: number): T[] {
    if (!Array.isArray(array)) {
      console.warn('pfyTake got an invalid array param', array)
      return [];
    }
    return array.slice(0, count);
  }
}
