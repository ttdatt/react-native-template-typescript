import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import { MainStackParamList } from './types';
import { navigationRef } from './utils';
import { ScreenNames } from './screenNames';
import { WelcomeScreen } from '../screens';
import { MainTabNavigator } from './MainTabNavigator';

const NavStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  const routeNameRef = useRef<string>();

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}>
      <NavStack.Navigator>
        <NavStack.Screen
          name={ScreenNames.WelcomeScreen}
          component={WelcomeScreen}
          options={{ headerBackTitle: 'Personal details' }}
        />
        <NavStack.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name={ScreenNames.MainTab}
          component={MainTabNavigator}
        />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};
export default MainStackNavigator;
