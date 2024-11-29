import { Pipe, PipeTransform } from '@angular/core';
import {PfyChunkPipe} from "../array/pfy-chunk.pipe";

@Pipe({
  name: 'pfyDecode',
  standalone: true
})
export class PfyUrlDecodePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return decodeURIComponent(value);
  }
}
