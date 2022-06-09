import styled from 'styled-components/native';
import {widthDimensionCalculation} from '../../Theme';

export const MainContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: ${widthDimensionCalculation(10)}px;
`;

export const Wrapper = styled.View<{selected?: boolean}>`
  background-color: ${props => (props.selected ? '#54ba25' : 'lightgray')};
  width: ${widthDimensionCalculation(100)}px;
  height: ${widthDimensionCalculation(30)}px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
export const Title = styled.Text<{selected?: boolean}>`
  font-size: 16px;
  color: ${props => props.selected && '#fff'};
  font-weight: bold;
`;
