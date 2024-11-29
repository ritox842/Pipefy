import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyKeys',
  standalone: true
})
export class PfyKeysPipe implements PipeTransform {
  transform(value: object): string[] {
    if (!value) return [];
    return Object.keys(value);
  }
}
