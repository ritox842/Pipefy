import {inject, InjectionToken, Pipe, PipeTransform} from '@angular/core';

export const PFY_CHUNK_SIZE = new InjectionToken<number>(
  'Set the default chunk size. Default is 2.',
);

@Pipe({
  name: 'pfyChunk',
  standalone: true
})
export class PfyChunkPipe implements PipeTransform {
  defaultChunkSize = inject(PFY_CHUNK_SIZE, {optional: true})

  transform<T>(array: T[], size: number = this.defaultChunkSize ?? 2): T[][] {
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
