import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyRoman',
  standalone: true
})
export class PfyRomanPipe implements PipeTransform {
  private readonly romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  transform(value: number): string {
    if (value <= 0 || value >= 4000) return value.toString();

    let result = '';
    let remaining = value;

    for (const { value: decimal, numeral } of this.romanNumerals) {
      while (remaining >= decimal) {
        result += numeral;
        remaining -= decimal;
      }
    }

    return result;
  }
}
