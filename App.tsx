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
import React from 'react';
import Navigator from './src/router';
import theme from './src/themes/themes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  );
};

export default App;
