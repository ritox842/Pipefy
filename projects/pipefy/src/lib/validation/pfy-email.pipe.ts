import {inject, InjectionToken, Pipe, PipeTransform} from '@angular/core';

export const PFY_IS_EMAIL = new InjectionToken<RegExp>(
  'Set the default RegExp for validating email address. The default is /^[a-zA-Z0-9._%+-]+(?:\\.[a-zA-Z0-9._%+-]+)*@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/',
);

@Pipe({
  name: 'pfyIsEmail',
  standalone: true
})
export class PfyIsEmailPipe implements PipeTransform {
  defaultEmailRegex = inject(PFY_IS_EMAIL, {optional: true})

  transform(value: string, emailRegex = this.defaultEmailRegex ?? /^[a-zA-Z0-9._%+-]+(?:\.[a-zA-Z0-9._%+-]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/): boolean {
    if (!value) return false;
    return emailRegex.test(value);
  }
}
