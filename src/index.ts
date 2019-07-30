import { Dimensions, Platform, PixelRatio } from 'react-native';

export var { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'window',
);

// based on iPhone 8's scale
const wscale: number = SCREEN_WIDTH / 375;
const hscale: number = SCREEN_HEIGHT / 667;

export default function normalize(
  size: number,
  based: 'width' | 'height' = 'width',
) {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
