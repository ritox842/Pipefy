import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyRgb2hex',
  standalone: true
})
export class PfyRgb2hexPipe implements PipeTransform {
  transform(r: number, g: number, b: number): string {
    return '#' + [r, g, b]
      .map(x => Math.max(0, Math.min(255, x)).toString(16).padStart(2, '0'))
      .join('');
  }
}
