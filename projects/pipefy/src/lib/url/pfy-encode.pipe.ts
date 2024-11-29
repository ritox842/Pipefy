import { Pipe, PipeTransform } from '@angular/core';
import {PfyChunkPipe} from "../array/pfy-chunk.pipe";

@Pipe({
  name: 'pfyEncode',
  standalone: true
})
export class PfyUrlEncodePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return encodeURIComponent(value);
  }
}
