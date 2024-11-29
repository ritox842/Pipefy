import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfySlugify',
  standalone: true
})
export class PfySlugifyPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  }
}
