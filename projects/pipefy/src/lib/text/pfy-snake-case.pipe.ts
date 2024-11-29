import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfySnakeCase',
  standalone: true
})
export class PfySnakeCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      .replace(/[\s-]+/g, '_')
      .toLowerCase();
  }
}
