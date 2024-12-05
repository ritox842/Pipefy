import {inject, InjectionToken, Pipe, PipeTransform} from '@angular/core';

export const PFY_PHONE = new InjectionToken<RegExp>(
  'Set the default RegExp for validating phone numbers. The default is /^\\+?[1-9]\\d{0,2}[-.\\s]?(\\(?\\d{1,4}\\)?[-.\\s]?)?\\d{3}[-.\\s]?\\d{4}$/',
);

@Pipe({
  name: 'pfyIsPhone',
  standalone: true
})
export class PfyIsPhonePipe implements PipeTransform {
  defaultPhoneNumberRegex = inject(PFY_PHONE, {optional: true})

  transform(value: string, phoneRegex = this.defaultPhoneNumberRegex ?? /^\+?[1-9]\d{0,2}[-.\s]?(\(?\d{1,4}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/): boolean {
    if (!value) return false;
    return phoneRegex.test(value);
  }
}
