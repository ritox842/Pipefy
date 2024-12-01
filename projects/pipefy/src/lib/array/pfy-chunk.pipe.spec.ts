import {PFY_CHUNK_SIZE, PfyChunkPipe} from './pfy-chunk.pipe';
import {TestBed} from '@angular/core/testing';

describe('PfyChunkPipe', () => {
  let pipe: PfyChunkPipe;

  describe('Default params', () => {
    beforeEach(() => {
      TestBed.runInInjectionContext(() => {
        pipe = new PfyChunkPipe();
      })
    });

    it('should create an instance', () => {
      expect(pipe).toBeTruthy();
    });

    it('should chunk an array into smaller arrays of specified size', () => {
      const array = [1, 2, 3, 4, 5, 6];
      const expected = [[1, 2], [3, 4], [5, 6]];

      const result = pipe.transform(array);

      expect(result).toEqual(expected);
    });

    it('should handle empty arrays', () => {
      const array: number[] = [];
      const expected: number[][] = [];

      const result = pipe.transform(array);

      expect(result).toEqual(expected);
    });

    it('should handle arrays with a size less than the chunk size', () => {
      const array = [1, 2, 3];
      const expected = [[1, 2, 3]];

      const result = pipe.transform(array, 4);

      expect(result).toEqual(expected);
    });

    it('should handle non-array input', () => {
      const input = 'not an array';
      const expected: any[] = [];

      const result = pipe.transform<string>(input as unknown as string[], 2);

      expect(result).toEqual(expected);
    });
  })

  describe('Injected params', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{
          provide: PFY_CHUNK_SIZE, useValue: 7
        }]
      });
      TestBed.runInInjectionContext(() => {
        pipe = new PfyChunkPipe();
      })
    });

    it('should chunk an array into smaller arrays of specified size ', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expected = [[1, 2, 3, 4, 5, 6, 7], [8, 9, 10]];

      const result = pipe.transform(array)
      expect(result).toEqual(expected);

    });
  })
});
