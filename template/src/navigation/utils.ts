import { createNavigationContainerRef } from '@react-navigation/native';
import { MainStackParamList } from 'navigation/types';

export const navigationRef = createNavigationContainerRef<MainStackParamList>();
export const navigate = (
  name: keyof MainStackParamList,
  params?: MainStackParamList[keyof MainStackParamList],
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
export const reset = (
  name: keyof MainStackParamList,
  params?: MainStackParamList[keyof MainStackParamList],
) => {
  if (navigationRef.isReady()) navigationRef.reset({ index: 0, routes: [{ name, params }] });
};
