import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/main/home';
import MyPage from '../screens/main/mypage';
import Community from '../screens/main/community';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === 'MainPage') {
            iconName = 'home';
          } else if (route.name === 'MyPage') {
            iconName = 'user';
          } else if (route.name === 'Community') {
            iconName = 'message1';
          }
          return <Icon name={iconName} size={20} />;
        },
      })}>
      <Tab.Screen
        name="MainPage"
        component={Home}
        options={{headerShown: false, unmountOnBlur: true}}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{headerShown: false, unmountOnBlur: true}}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{headerShown: false, unmountOnBlur: true}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
