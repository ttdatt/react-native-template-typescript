import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MockNavigator = (props: { component: any }) => {
  const { component } = props;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='screen'>{() => component}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockNavigator;
