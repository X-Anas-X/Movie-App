import {Platform, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {widthDimensionCalculation} from '../../Theme';

export const MainContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: ${widthDimensionCalculation(20)}px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;
