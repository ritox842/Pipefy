import { Pipe, PipeTransform } from '@angular/core';
import {PfyChunkPipe} from "../array/pfy-chunk.pipe";

@Pipe({
  name: 'pfyFormat',
  standalone: true
})
export class PfyDateFormatPipe implements PipeTransform {
  transform(value: Date | string, format: string = 'yyyy-MM-dd'): string {
    if (!value) return '';
    const date = new Date(value);

    const replacements = {
      yyyy: date.getFullYear(),
      MM: String(date.getMonth() + 1).padStart(2, '0'),
      dd: String(date.getDate()).padStart(2, '0'),
      HH: String(date.getHours()).padStart(2, '0'),
      mm: String(date.getMinutes()).padStart(2, '0'),
      ss: String(date.getSeconds()).padStart(2, '0')
    } as const;

    const replacementsKeys = Object.keys(replacements) as Array<keyof typeof replacements>;
    const replacementsRegex = new RegExp(replacementsKeys.join('|'), 'g');

    return format.replace(replacementsRegex, (match) => replacements[match as keyof typeof replacements].toString());
  }
}
