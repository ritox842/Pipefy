import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyCamelCase',
  standalone: true
})
export class PfyCamelCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  }
}
