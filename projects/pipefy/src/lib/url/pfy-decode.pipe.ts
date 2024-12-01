import { Pipe, PipeTransform } from '@angular/core';
import {PfyChunkPipe} from "../array/pfy-chunk.pipe";

@Pipe({
  name: 'pfyDecode',
  standalone: true
})
export class PfyUrlDecodePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    try{
      return decodeURIComponent(value);
    } catch (e){
      console.warn('pfyDecode got an invalid URL param', value)
      return ''
    }
  }
}
