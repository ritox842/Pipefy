import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyKebabCase',
  standalone: true
})
export class PfyKebabCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase();
  }
}
