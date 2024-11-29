import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyExcerpt',
  standalone: true
})
export class PfyExcerptPipe implements PipeTransform {
  transform(value: string, words: number = 50): string {
    if (!value) return '';
    const wordArray = value.split(/\s+/);
    if (wordArray.length <= words) return value;
    return wordArray.slice(0, words).join(' ') + '...';
  }
}
