import { ScreenNames } from './screenNames';
import { useNavigation, useRoute, RouteProp, CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { StackScreenProps } from '@react-navigation/stack';

export type MainStackParamList = {
  [ScreenNames.MainTab]: undefined;
  [ScreenNames.WelcomeScreen]: undefined;
};

export type MainTabParamList = {
  [ScreenNames.HomeScreen]: undefined;
  [ScreenNames.UserScreen]: undefined;
};

type NavigationScreenProps = CompositeScreenProps<
  StackScreenProps<MainStackParamList>,
  BottomTabScreenProps<MainTabParamList>
>;

type NavigationProp = NavigationScreenProps['navigation'];
export const useAppNavigation = () => useNavigation<NavigationProp>();
export const useAppRoute = <
  ScreenName extends keyof MainStackParamList | keyof MainTabParamList,
>() => useRoute<RouteProp<MainStackParamList & MainTabParamList, ScreenName>>();
