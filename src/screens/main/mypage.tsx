import React from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import Achievement from '../../components/main/mypage/Achievement';
import Info from '../../components/main/mypage/Info';
import LogoutBtn from '../../components/main/mypage/LogoutBtn';
import Statistics from '../../components/main/mypage/Statistics';
import {styles} from '../../App';

const MyPage = () => {
  return (
    <View style={{backgroundColor: '#f7f7f7'}}>
      <SafeAreaView style={styles.safeAreaTop} />
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
    </View>
  );
};

export default MyPage;
