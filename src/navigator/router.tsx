import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from '../screens';
import Ranking from '../screens/ranking';
import TabNavigation from './TabNavigation';
import RootStackParamList from '../types/RootStackParamList';
import TrashCanLocation from '../screens/trashcan/trashcanLocation';
import TrashCanInfo from '../screens/trashcan/trashcanInfo';
import TrashCanAdd from '../screens/trashcan/trashcanAdd';
import Faq from '../screens/faq';

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
        <Stack.Screen
          name="TrashCanLocation"
          component={TrashCanLocation}
          options={{title: ''}}
        />
        <Stack.Screen
          name="TrashCanInfo"
          component={TrashCanInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TrashCanAdd"
          component={TrashCanAdd}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FAQ"
          component={Faq}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
