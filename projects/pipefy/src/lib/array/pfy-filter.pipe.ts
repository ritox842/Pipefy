import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyFilter',
  standalone: true
})
export class PfyFilterPipe implements PipeTransform {
  transform<T>(array: T[], searchText: string, key?: keyof T): T[] {
    if (!Array.isArray(array)){
      console.warn('pfyFilter got an invalid array param', array);
      return array;
    }

    if (!searchText) {
      console.warn('pfyFilter got an invalid string param', searchText);
      return array;
    }

    searchText = searchText.toLowerCase();
    return array.filter(item => {
      const value = key ? item[key] : item;
      return `${value}`.toLowerCase().includes(searchText);
    });
  }
}
