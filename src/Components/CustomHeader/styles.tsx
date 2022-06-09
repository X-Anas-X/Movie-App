import {Platform, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {widthDimensionCalculation} from '../../Theme';

export const MainContainer = styled.View<{back?: boolean}>`
  ${props => props.back && 'background-color: #ffffff'}
  ${props =>
    props.back
      ? `padding: ${widthDimensionCalculation(15)}`
      : `padding-bottom: ${widthDimensionCalculation(15)}`}px
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const Arrow = styled.Image`
  width: ${widthDimensionCalculation(20)}px;
  height: ${widthDimensionCalculation(20)}px;
`;
