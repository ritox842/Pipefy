import { Pipe, PipeTransform } from '@angular/core';
import {PfyChunkPipe} from "../array/pfy-chunk.pipe";

@Pipe({
  name: 'pfyIsUrl',
  standalone: true
})
export class PfyIsUrlPipe implements PipeTransform {
  transform(value: string): boolean {
    if (!value) return false;
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }
}
