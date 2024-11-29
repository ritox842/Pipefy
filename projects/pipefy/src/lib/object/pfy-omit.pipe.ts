import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyOmit',
  standalone: true
})
export class PfyOmitPipe implements PipeTransform {
  transform<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    if (!obj) return {} as Omit<T, K>;
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !keys.includes(key as K))
    ) as Omit<T, K>;
  }
}
