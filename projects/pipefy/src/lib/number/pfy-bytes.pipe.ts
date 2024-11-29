import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfyBytes',
  standalone: true
})
export class PfyBytesPipe implements PipeTransform {
  private units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

  transform(bytes: number, precision: number = 2): string {
    if (isNaN(bytes) || bytes === 0) return '0 B';

    const exp = Math.floor(Math.log(bytes) / Math.log(1024));
    const size = bytes / Math.pow(1024, exp);
    const unit = this.units[exp];

    return `${size.toFixed(precision)} ${unit}`;
  }
}
