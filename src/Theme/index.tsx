import {Dimensions} from 'react-native';
import {DefaultTheme} from 'styled-components/native';
const {width, height} = Dimensions.get('window');

export const widthDimensionCalculation = (pixels: number) => {
  return (width * pixels) / 375;
};

export const heightDimensionCalculation = (pixels: number) => {
  return (height * pixels) / 844;
};

export default {
  widthDimensionCalculation,
  heightDimensionCalculation,
  fontSize: {
    sm: widthDimensionCalculation(10),
    s: widthDimensionCalculation(12),
    md: widthDimensionCalculation(14),
    lg: widthDimensionCalculation(16),
    xlg: widthDimensionCalculation(18),
  },
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    primary: 'gray',
    lime: 'lightgreen',
  },
} as DefaultTheme;
