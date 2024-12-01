import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pfyIsPhone',
  standalone: true
})
export class PfyIsPhonePipe implements PipeTransform {
  transform(value: string): boolean {
    if (!value) return false;
    const phoneRegex = /^\+?[1-9]\d{0,2}[-.\s]?(\(?\d{1,4}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(value);
  }
}
