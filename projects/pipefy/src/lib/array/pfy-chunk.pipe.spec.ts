import { PfyChunkPipe } from './pfy-chunk.pipe';

describe('PfyChunkPipe', () => {
    let pipe: PfyChunkPipe;

    beforeEach(() => {
        pipe = new PfyChunkPipe();
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should chunk an array into smaller arrays of specified size', () => {
        const array = [1, 2, 3, 4, 5, 6];
        const expected = [[1, 2], [3, 4], [5, 6]];

        const result = pipe.transform(array, 2);

        expect(result).toEqual(expected);
    });

    it('should handle empty arrays', () => {
        const array: number[] = [];
        const expected: number[][] = [];

        const result = pipe.transform(array, 2);

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
});