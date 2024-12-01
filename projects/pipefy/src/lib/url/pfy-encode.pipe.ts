import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pfyEncode',
  standalone: true
})
export class PfyUrlEncodePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    try {
      return encodeURIComponent(value);
    } catch (e){
      console.warn('pfyEncode got an invalid URL param', value)
      return '';
    }

  }
}
