import { Pipe, PipeTransform } from '@angular/core';
import {PfyChunkPipe} from "../array/pfy-chunk.pipe";

@Pipe({
  name: 'pfyIsPhone',
  standalone: true
})
export class PfyIsPhonePipe implements PipeTransform {
  transform(value: string): boolean {
    if (!value) return false;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return phoneRegex.test(value);
  }
}
