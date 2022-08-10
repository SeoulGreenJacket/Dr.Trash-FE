import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import MyPage from '../../screens/mypage';
import Community from '../../screens/community';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === 'HomePage') {
            iconName = 'home';
          } else if (route.name === 'Community') {
            iconName = 'form';
          } else {
            iconName = 'user';
          }
          return <Icon name={iconName} />;
        },
      })}>
      <Tab.Screen
        name="HomePage"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
