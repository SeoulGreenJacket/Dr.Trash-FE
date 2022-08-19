import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from '../screens';

import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
