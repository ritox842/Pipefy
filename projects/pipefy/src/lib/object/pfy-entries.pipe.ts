import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyEntries',
  standalone: true
})
export class PfyEntriesPipe implements PipeTransform {
  transform<T>(value: { [key: string]: T }): [string, T][] {
    if (!value) return [];
    return Object.entries(value);
  }
}
