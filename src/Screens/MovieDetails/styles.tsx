import styled from 'styled-components/native';
import {
  heightDimensionCalculation,
  widthDimensionCalculation,
} from '../../Theme';

export const MainContainer = styled.View`
  flex: 1;
  background-color: #fff;
  padding-left: ${widthDimensionCalculation(20)}px;
  padding-right: ${widthDimensionCalculation(20)}px;
  padding-bottom: ${widthDimensionCalculation(50)}px;
`;
export const InfoWrapper = styled.View`
  width: 50%;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 900;
  margin-top: ${heightDimensionCalculation(20)}px;
`;

export const Date = styled.Text`
  font-size: 16px;
  color: #5a5a5a;
  margin-top: 15px;
`;

export const GenreContainer = styled.Text`
  flex-direction: row;
  margin-top: 10px;
`;

export const GenreWrapper = styled.View`
  background-color: lightgray;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
  align-items: center;
  border-radius: 15px;
  margin-right: ${widthDimensionCalculation(5)}px;
  margin-top: ${heightDimensionCalculation(5)}px;
`;
export const OverviewTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: ${heightDimensionCalculation(20)}px;
`;
export const OverviewText = styled.Text`
  font-size: 16px;
  margin-top: ${heightDimensionCalculation(10)}px;
`;
export const Percentage = styled.Text`
  font-size: 20px;
  font-weight: 900;
  color: ${'#54ba25'};
  margin-top: ${heightDimensionCalculation(10)}px;
`;

export const MovieImage = styled.Image`
  border-radius: 15px;
  height: ${heightDimensionCalculation(220)}px;
  width: ${widthDimensionCalculation(140)}px;
`;

export const GenreText = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;

export const CreditImage = styled.Image`
  border-radius: 100px;
  height: ${heightDimensionCalculation(80)}px;
  width: ${widthDimensionCalculation(80)}px;
  margin-bottom: ${heightDimensionCalculation(8)}px;
`;

export const CreditWrapper = styled.View`
  margin-top: ${heightDimensionCalculation(10)}px;
  margin-right: ${heightDimensionCalculation(20)}px;
  align-items: center;
`;

export const CreditText = styled.Text`
  font-size: 15px;
  font-weight: 500;
`;
