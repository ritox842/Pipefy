import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyMerge',
  standalone: true
})
export class PfyMergePipe implements PipeTransform {
  transform(...objects: object[]): object {
    return Object.assign({}, ...objects);
  }
}
