import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyDrop',
  standalone: true
})
export class PfyDropPipe implements PipeTransform {
  transform<T>(array: T[], count: number): T[] {
    if (!Array.isArray(array)) return [];
    return array.slice(count);
  }
}
