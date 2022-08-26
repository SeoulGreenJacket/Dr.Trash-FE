import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Achievement from '../../components/main/mypage/Achievement';
import Info from '../../components/main/mypage/Info';
import LogoutBtn from '../../components/main/mypage/LogoutBtn';
import Statistics from '../../components/main/mypage/Statistics';
import {GlobalLayout} from '../../styles/globalLayout';
import {styles} from '../../App';
const MyPage = () => {
  return (
    <GlobalLayout>
      <SafeAreaView style={styles.safeAreaTop} />
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
