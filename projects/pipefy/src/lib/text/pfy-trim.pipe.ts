import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyTrim',
  standalone: true
})
export class PfyTrimPipe implements PipeTransform {
  transform(value: string, chars?: string): string {
    if (!value) return '';
    if (!chars) return value.trim();
    const regex = new RegExp(`^[${chars}]+|[${chars}]+$`, 'g');
    return value.replace(regex, '');
  }
}
