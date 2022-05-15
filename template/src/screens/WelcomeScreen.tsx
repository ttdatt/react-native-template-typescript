import React, { useEffect, useState } from 'react';
import { ScreenNames } from 'navigation/screenNames';
import { useAppNavigation } from 'navigation/types';
import { Button, Text, View } from 'react-native';
import { getHelloWorld } from 'api';

export const WelcomeScreen = () => {
  const navigation = useAppNavigation();
  const [text, setText] = useState();

  useEffect(() => {
    (async () => {
      const data = await getHelloWorld();
      setText(data);
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Welcome screen</Text>
      <Text>{text}</Text>
      <Button title='Go to Tab' onPress={() => navigation.navigate(ScreenNames.MainTab)} />
    </View>
  );
};
