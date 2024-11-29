import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyCapitalize',
  standalone: true
})
export class PfyCapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}