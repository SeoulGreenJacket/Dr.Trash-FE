/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {View} from 'react-native';
import GlobalHeader from './src/components/common/header';
import Navigator from './src/router';
import globalLayout from './src/styles/globalLayout';

const App = () => {
  return (
    <View style={globalLayout.container}>
      <GlobalHeader />
      <Navigator />
    </View>
  );
};

export default App;
