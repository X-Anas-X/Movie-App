import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovieDetails from '../Screens/MovieDetails';
import Popular from '../Screens/Popular';
import TopRated from '../Screens/TopRated';
import Upcoming from '../Screens/Upcoming';
import Tabs from '../Screens/Tabs';

export type AppStackParamList = {
  Upcoming: undefined;
  Popular: undefined;
  TopRated: undefined;
  Tabs: undefined;
  MovieDetails: {id: string; genreNames: string[]} | undefined;
};

const AppStackNavigation = () => {
  const {Navigator, Screen} = createStackNavigator<AppStackParamList>();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Tabs">
      <Screen name="Upcoming" component={Upcoming} />
      <Screen name="Popular" component={Popular} />
      <Screen name="TopRated" component={TopRated} />
      <Screen name="Tabs" component={Tabs} />
      <Screen name="MovieDetails" component={MovieDetails} />
    </Navigator>
  );
};

export default AppStackNavigation;
