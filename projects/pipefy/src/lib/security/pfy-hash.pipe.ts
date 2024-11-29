import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyHash',
  standalone: true
})
export class PfyHashPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      const char = value.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash.toString(36);
  }
}
