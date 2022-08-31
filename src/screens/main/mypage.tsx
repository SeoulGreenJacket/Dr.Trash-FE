import React from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import Achievement from '../../components/main/mypage/Achievement';
import Info from '../../components/main/mypage/Info';
import LogoutBtn from '../../components/main/mypage/LogoutBtn';
import Statistics from '../../components/main/mypage/Statistics';
import {styles} from '../../App';
import {SecondaryGlobalLayout} from '../../styles/globalLayout';
const MyPage = () => {
  return (
    <SecondaryGlobalLayout>
      <SafeAreaView style={styles.mypageSafeAreaTop} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Info />
        <View
          style={{
            width: '100%',
            height: 9,
            backgroundColor: '#ededed',
            marginBottom: 36,
          }}
        />
        <Statistics />
        <Achievement />
        <LogoutBtn />
      </ScrollView>
    </SecondaryGlobalLayout>
  );
};

export default MyPage;
