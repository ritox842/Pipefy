import { PfyHex2rgbPipe } from './pfy-hex2rgb.pipe';

describe('PfyHex2rgbPipe', () => {
  let pipe: PfyHex2rgbPipe;

  beforeEach(() => {
    pipe = new PfyHex2rgbPipe();
  });

  it('should transform a valid hex code to RGB object', () => {
    const hexCode = '#FF0000';
    const expectedResult = { r: 255, g: 0, b: 0 };

    const result = pipe.transform(hexCode);

    expect(result).toEqual(expectedResult);
  });

  it('should handle hex codes without the # symbol', () => {
    const hexCode = 'FF0000';
    const expectedResult = { r: 255, g: 0, b: 0 };

    const result = pipe.transform(hexCode);

    expect(result).toEqual(expectedResult);
  });

  it('should return null for invalid hex codes', () => {
    const invalidHexCodes = ['#XYZ123', '12345', 'FFFFFFG'];

    invalidHexCodes.forEach(hexCode => {
      const result = pipe.transform(hexCode);
      expect(result).toBeNull();
    });
  });
});
