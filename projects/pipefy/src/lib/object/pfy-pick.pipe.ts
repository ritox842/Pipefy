import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyPick',
  standalone: true
})
export class PfyPickPipe implements PipeTransform {
  transform<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    if (!obj) return {} as Pick<T, K>;
    return keys.reduce((acc, key) => {
      if (key in obj) acc[key] = obj[key];
      return acc;
    }, {} as Pick<T, K>);
  }
}
