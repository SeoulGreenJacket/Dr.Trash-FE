import React from 'react';
import {ScrollView} from 'react-native';
import Achievement from '../../components/main/mypage/Achievement';
import Info from '../../components/main/mypage/Info';
import LogoutBtn from '../../components/main/mypage/LogoutBtn';
import Statistics from '../../components/main/mypage/Statistics';
import {GlobalLayout} from '../../styles/globalLayout';

const MyPage = () => {
  return (
    <GlobalLayout>
      <ScrollView
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <Info />
        <Achievement />
        <Statistics />
        <LogoutBtn />
      </ScrollView>
    </GlobalLayout>
  );
};

export default MyPage;
