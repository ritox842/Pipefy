import {inject, InjectionToken, Pipe, PipeTransform} from '@angular/core';

export const PFY_DATE_FORMAT = new InjectionToken<string>(
  'Set the default Date format. Default is yyyy-MM-dd.',
);

@Pipe({
  name: 'pfyDateFormat',
  standalone: true
})
export class PfyDateFormatPipe implements PipeTransform {
  defaultDateFormat = inject(PFY_DATE_FORMAT, {optional: true}) ?? 'yyyy-MM-dd';
  transform(value: Date | string, format = this.defaultDateFormat): string {
    const date = new Date(value);

    if (!value || !date.getDate()) {
      console.warn('pfyFormat got an invalid date param', value)
      return '';
    }

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

    const formattedDate = format.replace(replacementsRegex, (match) => replacements[match as keyof typeof replacements].toString());

    if (formattedDate === 'invalid format'){
      console.warn('pfyFormat got an invalid format param', format)
      return this.defaultDateFormat.replace(replacementsRegex, (match) => replacements[match as keyof typeof replacements].toString());
    }

    return formattedDate
  }
}
