import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyUnique'
})
export class PfyUniquePipe implements PipeTransform {
  transform<T>(value: T[], key?: keyof T): T[] {
    if (!Array.isArray(value)) {
      return value;
    }

    if (key) {
      return [...new Map(value.map(item => [item[key], item])).values()];
    } else {
      return [...new Set(value)];
    }
  }
}
