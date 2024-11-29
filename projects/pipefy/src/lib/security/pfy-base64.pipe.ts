import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyBase64',
  standalone: true
})
export class PfyBase64Pipe implements PipeTransform {
  transform(value: string, decode: boolean = false): string {
    if (!value) return '';
    return decode ? atob(value) : btoa(value);
  }
}
