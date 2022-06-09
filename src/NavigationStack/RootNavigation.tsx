import React, {createRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import AppStackNavigation, {AppStackParamList} from './AppStack';

export type RootNavigationStackParamList = {
  AppStack: NavigatorScreenParams<AppStackParamList>;
};
export const navigationRef =
  createRef<NavigationContainerRef<RootNavigationStackParamList>>();

export const goBack = () => {
  navigationRef.current?.goBack();
};

const RootStackNavigation = () => {
  const {Navigator, Screen} =
    createStackNavigator<RootNavigationStackParamList>();

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Navigator initialRouteName="AppStack">
          <Screen
            name="AppStack"
            component={AppStackNavigation}
            options={{headerShown: false}}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootStackNavigation;
