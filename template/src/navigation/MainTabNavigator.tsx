import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenNames } from './screenNames';
import { HomeScreen, UserScreen } from 'screens';

import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ScreenNames.HomeScreen}
        component={HomeScreen}
        options={{ title: 'Home', headerTitle: 'Home', tabBarTestID: 'home-tab-button' }}
      />
      <Tab.Screen
        name={ScreenNames.UserScreen}
        component={UserScreen}
        options={{ title: 'User', headerTitle: 'My Account', tabBarTestID: 'pay-tab-button' }}
      />
    </Tab.Navigator>
  );
};
