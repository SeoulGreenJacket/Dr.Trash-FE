import React from 'react';
import {ScrollView} from 'react-native';
import Achievement from '../../components/main/myPage/Achievement';
import Info from '../../components/main/myPage/Info';
import LogoutBtn from '../../components/main/myPage/LogoutBtn';
import Statistics from '../../components/main/myPage/Statistics';
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
