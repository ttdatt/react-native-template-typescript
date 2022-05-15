import { setupServer } from 'msw/native';
import { handlers } from './handlers';
import 'react-native-url-polyfill/auto';

export const native = setupServer(...handlers);
