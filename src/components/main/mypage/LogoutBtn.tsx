import React from 'react';
import {Text} from 'react-native';
import {Logout} from '../../../styles/main/mypage/logout';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LogoutBtn = () => {
  const logout = async () => {
    let refresh = await AsyncStorage.getItem('refresh_token');
    try {
      await axios.delete('http://localhost:3000/auth/logout', {
        headers: {
          Authorization: `Bearer ${refresh}`,
        },
      });
      await AsyncStorage.removeItem('access_token');
      await AsyncStorage.removeItem('refresh_token');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Logout onPress={logout}>
      <Text style={{textAlign: 'center'}}>로그아웃</Text>
    </Logout>
  );
};

export default LogoutBtn;
