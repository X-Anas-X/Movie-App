import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {AppStackParamList} from '../../NavigationStack/AppStack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopRated from '../TopRated';
import Popular from '../Popular';
import Upcoming from '../Upcoming';
import {View} from 'react-native';
import {Title} from './styles';

type UpcomingScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'Tabs'
>;

interface Props {
  navigation: UpcomingScreenNavigationProp;
}

export type TabStackParamList = {
  Upcoming: undefined;
  Popular: undefined;
  TopRated: undefined;
};

const Tabs = () => {
  const {Navigator, Screen} =
    createMaterialTopTabNavigator<TabStackParamList>();

  const tabBarOptions = {
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    indicatorStyle: {
      backgroundColor: '#54ba25',
      height: '100%',
      borderRadius: 30,
    },
    style: {
      width: '90%',
      alignSelf: 'center',
      elevation: 0,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
    labelStyle: {
      fontSize: 14,
      fontWeight: '700',
      lineHeight: 19,
    },
    pressOpacity: 1,
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Title>{'Movies'}</Title>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <Navigator initialRouteName="Upcoming" tabBarOptions={tabBarOptions}>
          <Screen name={'Upcoming'} component={Upcoming} />
          <Screen name={'Popular'} component={Popular} />
          <Screen name={'Top Rated'} component={TopRated} />
        </Navigator>
      </View>
    </View>
  );
};

export default Tabs;
