/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {ThemeProvider} from '@emotion/react';
import theme from './themes/themes';
import React from 'react';
import Navigator from './navigator/router';
import {StatusBar, StyleSheet} from 'react-native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </ThemeProvider>
  );
};
export const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: '#F7F7F7',
    marginBottom: 30,
  },
  safeAreaBottom: {
    flex: 0,
    backgroundColor: '#FFFFFF',
  },
  safeAreaBottomRank: {
    flex: 0,
    backgroundColor: '#000000',
  },
});

export default App;
