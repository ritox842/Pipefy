import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyFlatten',
  standalone: true
})
export class PfyFlattenPipe implements PipeTransform {
  transform<T>(array: T[]): T[] {
    if (!Array.isArray(array)) {
      console.warn('pfyFlatten got an invalid array param', array)
      return [];
    }
    return array.reduce((flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? this.transform(toFlatten) : toFlatten);
    }, [] as T[]);
  }
}
