import React from 'react';
import {Text} from 'react-native';
import {Logout} from '../../../styles/main/mypage/logout';

const LogoutBtn = () => {
  return (
    <Logout>
      <Text style={{textAlign: 'center'}}>로그아웃</Text>
    </Logout>
  );
};

export default LogoutBtn;
