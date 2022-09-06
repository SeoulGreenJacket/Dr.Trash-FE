import React, {useEffect, useState} from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import Achievement from '../../components/main/mypage/Achievement';
import Info from '../../components/main/mypage/Info';
import LogoutBtn from '../../components/main/mypage/LogoutBtn';
import Statistics from '../../components/main/mypage/Statistics';
import {styles} from '../../App';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/common/Loading';
import RootStackParamList from '../../types/RootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Config from 'react-native-config';

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
    const access = await AsyncStorage.getItem('access_token');
    let idRes: any;
    try {
      idRes = await axios.get(`${Config.SERVER_HOST}/users`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
    } catch (e) {
      console.error('getId', e);
    }
    try {
      const res = await axios.get(`${Config.SERVER_HOST}/users/${idRes.data}`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      setUser(res.data);
      setTimeout(() => setLoading(false), 1000);
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
            <Info user={user} />
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
            <LogoutBtn navigation={navigation} />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default MyPage;
