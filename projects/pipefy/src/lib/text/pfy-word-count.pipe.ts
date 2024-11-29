import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyWordCount',
  standalone: true
})
export class PfyWordCountPipe implements PipeTransform {
  transform(value: string): number {
    if (!value) return 0;
    return value.trim().split(/\s+/).length;
  }
}
