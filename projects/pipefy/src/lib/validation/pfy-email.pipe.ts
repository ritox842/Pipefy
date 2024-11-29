import { Pipe, PipeTransform } from '@angular/core';
import {PfyChunkPipe} from "../array/pfy-chunk.pipe";

@Pipe({
  name: 'pfyIsEmail',
  standalone: true
})
export class PfyIsEmailPipe implements PipeTransform {
  transform(value: string): boolean {
    if (!value) return false;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  }
}
