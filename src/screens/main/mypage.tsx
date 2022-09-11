import React, {useEffect, useState} from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import Achievement from '../../components/main/mypage/Achievement';
import Info from '../../components/main/mypage/Info';
import LogoutBtn from '../../components/main/mypage/LogoutBtn';
import Statistics from '../../components/main/mypage/Statistics';
import {styles} from '../../App';
import Loading from '../../components/common/Loading';
import RootStackParamList from '../../types/RootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import useApi from '../../hooks/axios';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Start'>;

const MyPage = ({navigation}: MainScreenProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    achievement: [],
    id: 0,
    name: '',
    point: 0,
    rank: 0,
    thumbnail: '',
    userGrade: '',
  });
  const getUser = async () => {
    let idRes: any;
    try {
      idRes = await useApi.get('/users');
    } catch (e) {
      console.error('getId', e);
    }
    try {
      const res = await useApi.get(`/users/${idRes.data}`);
      setUser(res.data);
      setLoading(false);
    } catch (e) {
      console.error('getInfo', e);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={{backgroundColor: '#f7f7f7', flex: 1}}>
          <SafeAreaView style={styles.safeAreaTop} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Info user={user} navigation={navigation} />
            <View
              style={{
                width: '100%',
                height: 9,
                backgroundColor: '#ededed',
                marginBottom: 36,
              }}
            />
            <Statistics />
            <Achievement achievement={user.achievement} />
            <LogoutBtn navigation={navigation} />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default MyPage;
