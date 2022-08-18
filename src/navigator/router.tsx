import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from '../screens';
import Ranking from '../screens/ranking';
import TabNavigation from './TabNavigation';
import RootStackParamList from '../types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
        <Stack.Screen
          name="Ranking"
          component={Ranking}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
