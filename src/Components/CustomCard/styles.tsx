import styled from 'styled-components/native';
import {
  heightDimensionCalculation,
  widthDimensionCalculation,
} from '../../Theme';

export const MainContainer = styled.View`
  background-color: #fff;
  padding: ${widthDimensionCalculation(15)}px;
  height: ${heightDimensionCalculation(170)}px;
  margin-top: 7px;
  margin-right: 2px;
  margin-left: 2px;
  margin-bottom: 10px;
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
`;
export const InfoWrapper = styled.View`
  width: 50%;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Date = styled.Text`
  font-size: 14px;
  color: #5a5a5a;
  margin-top: ${heightDimensionCalculation(10)}px;
`;

export const GenreContainer = styled.Text`
  flex-direction: row;
  margin-top: ${heightDimensionCalculation(4)}px;
  margin-right: ${widthDimensionCalculation(3)}px;
`;

export const MainGenreWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${heightDimensionCalculation(10)}px;
`;

export const GenreWrapper = styled.View`
  background-color: lightgray;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 2px;
  padding-bottom: 2px;
  align-items: center;
  border-radius: 15px;
`;
export const GenreText = styled.Text`
  font-size: 12px;
`;
export const Percentage = styled.Text`
  font-size: 21px;
  font-weight: 900;
  color: ${'#54ba25'};
  align-self: flex-end;
`;

export const MovieImage = styled.Image`
  border-radius: 15px;
  height: ${heightDimensionCalculation(140)}px;
  width: ${widthDimensionCalculation(90)}px;
`;
