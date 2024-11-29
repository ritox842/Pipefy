import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyPad',
  standalone: true
})
export class PfyPadPipe implements PipeTransform {
  transform(value: number, length: number = 2): string {
    return value.toString().padStart(length, '0');
  }
}
