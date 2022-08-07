/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// import {ThemeProvider} from '@emotion/react';
import React from 'react';
import Body from './src/components/common/content';
import GlobalHeader from './src/components/common/header';
import NavigationBar from './src/components/common/nav';
import Navigator from './src/router';
import {Container} from './src/styles/globalLayout';

const App = () => {
  return (
    // <ThemeProvider theme={}>
    <Container>
      <GlobalHeader />
      <Body>
        <Navigator />
      </Body>
      <NavigationBar />
    </Container>
    // </ThemeProvider>
  );
};

export default App;
