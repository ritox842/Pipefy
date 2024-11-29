import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyHex2rgb',
  standalone: true
})
export class PfyHex2rgbPipe implements PipeTransform {
  transform(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
}
