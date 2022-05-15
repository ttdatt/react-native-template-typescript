/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { native } from './mockServer/native';
native.listen();

LogBox.ignoreLogs(['[MSW] Warning']);

AppRegistry.registerComponent(appName, () => App);
