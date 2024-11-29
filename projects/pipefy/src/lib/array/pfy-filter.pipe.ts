import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyFilter',
  standalone: true
})
export class PfyFilterPipe implements PipeTransform {
  transform<T>(array: T[], searchText: string, key?: keyof T): T[] {
    if (!Array.isArray(array) || !searchText) return array;

    searchText = searchText.toLowerCase();
    return array.filter(item => {
      const value = key ? item[key] : item;
      return `${value}`.toLowerCase().includes(searchText);
    });
  }
}
