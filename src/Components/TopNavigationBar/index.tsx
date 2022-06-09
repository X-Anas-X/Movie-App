import React, {useState} from 'react';
import {Wrapper, MainContainer, Title} from './styles';
import {TouchableOpacity} from 'react-native';
import {navigationRef} from '../../NavigationStack/RootNavigation';

const TopNavigationBar = () => {
  const [selected, setSelected] = useState('');
  const navigateToRef = (route: string) => {
    setSelected(route);
    navigationRef.current.reset({
      index: 0,
      routes: [
        {
          name: 'AppStack',
          state: {
            index: 0,
            routes: [{name: route}],
          },
        },
      ],
    });
  };
  const currentTab = navigationRef?.current?.getCurrentRoute()?.name;

  return (
    <MainContainer>
      <TouchableOpacity onPress={() => navigateToRef('Upcoming')}>
        <Wrapper selected={(selected || currentTab)?.includes('Upcoming')}>
          <Title selected={(selected || currentTab)?.includes('Upcoming')}>
            Upcoming
          </Title>
        </Wrapper>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToRef('Popular')}>
        <Wrapper selected={(selected || currentTab)?.includes('Popular')}>
          <Title selected={(selected || currentTab)?.includes('Popular')}>
            Popular
          </Title>
        </Wrapper>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToRef('TopRated')}>
        <Wrapper selected={(selected || currentTab)?.includes('TopRated')}>
          <Title selected={(selected || currentTab)?.includes('TopRated')}>
            Top Rated
          </Title>
        </Wrapper>
      </TouchableOpacity>
    </MainContainer>
  );
};

export default TopNavigationBar;
