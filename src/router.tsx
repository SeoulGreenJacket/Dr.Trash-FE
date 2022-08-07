import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './screens';
import Icon from 'react-native-vector-icons/AntDesign';

import TabNavigation from './components/common/TabNavigation';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={TabNavigation}
            options={{
              title: '',
              headerLeft: () => {
                return <Text>Dr.TRASH</Text>;
              },
              headerRight: () => {
                return <Icon name="setting" size={20} />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigator;
