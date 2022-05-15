import 'react-native-gesture-handler/jestSetup';
import { server } from '../mockServer/server';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

export const mockedNavigate = jest.fn();
export const mockedGoBack = jest.fn();
export const mockedPush = jest.fn();
export const mockedUseRoute = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedGoBack,
      push: mockedPush,
    }),
    useRoute: mockedUseRoute,
  };
});

jest.mock('navigation/utils', () => ({
  navigate: mockedNavigate,
}));

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn(),
    getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
  };
});

jest.mock('react-native-device-info', () => {
  return {
    getVersion: jest.fn(),
    getBuildNumber: jest.fn(),
    getFirstInstallTime: jest.fn(),
    getLastUpdateTime: jest.fn(),
    isTablet: jest.fn().mockReturnValue(false),
  };
});

beforeAll(() => {
  return server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
