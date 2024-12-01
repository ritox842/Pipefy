import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyShuffle',
  standalone: true
})
export class PfyShufflePipe implements PipeTransform {
  transform<T>(array: T[]): T[] {
    if (!Array.isArray(array)) {
      console.warn('pfyShuffle got an invalid array param', array)
      return [];
    }
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
}
