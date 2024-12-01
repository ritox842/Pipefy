import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyAge',
  standalone: true
})
export class PfyAgePipe implements PipeTransform {
  transform(value: Date | string): number {
    if (!value) return 0;

    const birthDate = new Date(value);

    if (!birthDate.getDate()) {
      console.warn('pfyAge got an invalid date param', value)
      return 0;
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}
