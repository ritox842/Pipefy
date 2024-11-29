import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyValues',
  standalone: true
})
export class PfyValuesPipe implements PipeTransform {
  transform<T>(value: { [key: string]: T }): T[] {
    if (!value) return [];
    return Object.values(value);
  }
}
