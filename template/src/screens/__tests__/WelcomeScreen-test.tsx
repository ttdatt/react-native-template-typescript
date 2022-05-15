import React from 'react';
import { WelcomeScreen } from '../WelcomeScreen';
import { cleanup, fireEvent, render, waitFor } from '../../../jest/testUtils';
import { mockedNavigate } from '../../../jest/jestSetup';
import { ScreenNames } from 'navigation/screenNames';

describe('WelcomeScreen', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test('mock api is called and able to navigate to tab', async () => {
    const { getByText } = render(<WelcomeScreen />);
    await waitFor(() => expect(getByText('Hello world')).toBeTruthy());
    const button = getByText('Go to Tab');
    fireEvent.press(button);
    expect(mockedNavigate).toHaveBeenCalledWith(ScreenNames.MainTab);
  });
});
