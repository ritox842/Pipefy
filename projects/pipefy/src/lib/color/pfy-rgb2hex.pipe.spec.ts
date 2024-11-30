import { PfyRgb2hexPipe } from './pfy-rgb2hex.pipe';

describe('PfyRgb2hexPipe', () => {
  let pipe: PfyRgb2hexPipe;

  beforeEach(() => {
    pipe = new PfyRgb2hexPipe();
  });

  it('should transform valid RGB values to a hex code', () => {
    const r = 255;
    const g = 0;
    const b = 128;
    const expectedHex = '#ff0080';

    const result = pipe.transform(r, g, b);

    expect(result).toEqual(expectedHex);
  });

  it('should handle RGB values outside the 0-255 range', () => {
    const r = 260;
    const g = -10;
    const b = 150;
    const expectedHex = '#ff0096';

    const result = pipe.transform(r, g, b);

    expect(result).toEqual(expectedHex);
  });

  it('should handle non-integer RGB values', () => {
    const r = 255.5;
    const g = 10.2;
    const b = 128.8;
    const expectedHex = '#ff0a81';

    const result = pipe.transform(r, g, b);

    expect(result).toEqual(expectedHex);
  });
});
