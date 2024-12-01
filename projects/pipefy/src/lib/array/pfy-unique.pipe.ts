import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pfyUnique'
})
export class PfyUniquePipe implements PipeTransform {
  transform<T>(array: T[], key?: keyof T): T[] {
    if (!Array.isArray(array)) {
      console.warn('pfyUnique got an invalid array param', array)
      return array;
    }

    if (key) {
      return [...new Map(array.map(item => [item[key], item])).values()];
    }

    return [...new Set(array)];

  }
}
