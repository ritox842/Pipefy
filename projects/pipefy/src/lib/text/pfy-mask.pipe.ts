import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyMask',
  standalone: true
})
export class PfyMaskPipe implements PipeTransform {
  transform(value: string, maskChar: string = '*', showLast: number = 4): string {
    if (!value) return '';
    const length = value.length;
    const visible = value.slice(-showLast);
    return maskChar.repeat(length - showLast) + visible;
  }
}
