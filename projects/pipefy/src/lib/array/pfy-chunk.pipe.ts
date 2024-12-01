import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pfyChunk',
  standalone: true
})
export class PfyChunkPipe implements PipeTransform {
  transform<T>(array: T[], size: number = 2): T[][] {
    if (!Array.isArray(array)) {
      console.warn('pfyChunk got an invalid array param', array)
      return [];
    }

    return array.reduce((chunks, item, index) => {
      const chunkIndex = Math.floor(index / size);
      if (!chunks[chunkIndex]) {
        chunks[chunkIndex] = [];
      }
      chunks[chunkIndex].push(item);
      return chunks;
    }, [] as T[][]);
  }
}
