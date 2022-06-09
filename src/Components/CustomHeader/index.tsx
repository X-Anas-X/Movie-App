import React from 'react';
import {Arrow, MainContainer, Title} from './styles';
import TopNavigationBar from '../TopNavigationBar';
import {TouchableOpacity} from 'react-native';
import {goBack} from '../../NavigationStack/RootNavigation';
const arrow = require('../../../Public/Images/arrow-back.webp');

interface Props {
  title?: string;
  back?: boolean;
}
const CustomHeader = ({title, back}: Props) => {
  return (
    <>
      <MainContainer back={back}>
        {title && <Title>{title}</Title>}
        {back && (
          <TouchableOpacity onPress={goBack}>
            <Arrow source={arrow} theme={'black'} />
          </TouchableOpacity>
        )}
      </MainContainer>
      {title && <TopNavigationBar />}
    </>
  );
};

export default CustomHeader;
