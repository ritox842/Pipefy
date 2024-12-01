import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyGroupBy',
  standalone: true
})
export class PfyGroupByPipe implements PipeTransform {
  transform<T>(array: T[], key: keyof T): { [key: string]: T[] } {
    if (!Array.isArray(array)) {
      console.warn('pfyGroupBy got an invalid array param', array)
      return {};
    }

    return array.reduce((groups: { [key: string]: T[] }, item) => {
      if (item[key] === undefined) return groups;
      const groupKey = String(item[key]); // Ensure the key is a string
      groups[groupKey] = groups[groupKey] || [];
      groups[groupKey].push(item);
      return groups;
    }, {});
  }
}

