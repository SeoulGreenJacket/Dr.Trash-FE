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
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </ThemeProvider>
  );
};
const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: '#FFFFFF',
  },
  safeAreaBottom: {
    flex: 0,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
