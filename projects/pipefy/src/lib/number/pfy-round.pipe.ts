import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyRound',
  standalone: true
})
export class PfyRoundPipe implements PipeTransform {
  transform(value: number, decimals: number = 0): number {
    if (isNaN(value)) return 0;
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  }
}
