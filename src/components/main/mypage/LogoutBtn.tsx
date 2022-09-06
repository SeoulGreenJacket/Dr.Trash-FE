import React from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Logout} from '../../../styles/main/mypage/logout';
import Config from 'react-native-config';

const LogoutBtn = ({navigation}: any) => {
  const logout = async () => {
    let refresh = await AsyncStorage.getItem('refresh_token');
    try {
      await axios.delete(`${Config.SERVER_HOST}/auth/logout`, {
        headers: {
          Authorization: `Bearer ${refresh}`,
        },
      });
      await AsyncStorage.removeItem('access_token');
      await AsyncStorage.removeItem('refresh_token');
      navigation.reset({routes: [{name: 'Start'}]});
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <View style={{width: '100%', height: 64, position: 'relative'}}>
      <Logout onPress={logout}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            color: '#707070',
            marginTop: 7.5,
          }}>
          로그아웃
        </Text>
      </Logout>
    </View>
  );
};

export default LogoutBtn;
