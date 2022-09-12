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
  const [trashDataAll, setTrashDataAll] = useState<any>({
    can: {
      success: 0,
      failure: 0,
    },
    pet: {
      success: 0,
      failure: 0,
    },
    paper: {
      success: 0,
      failure: 0,
    },
    plastic: {
      success: 0,
      failure: 0,
    },
  });
  const [totalSuccess, setTotalSuccess] = useState(0);
  const [totalFailure, setTotalFailure] = useState(0);

  //총 정확도 구하기
  useEffect(() => {
    let success = 0;
    let failure = 0;
    for (const key in trashDataAll) {
      success += trashDataAll[key].success;
      failure += trashDataAll[key].failure;
      setTotalSuccess(success);
      setTotalFailure(failure);
    }
  }, [trashDataAll]);

  //유저 정보 가져오기
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
      const res = await axios.get(
        `${Config.SERVER_HOST}/users/${idRes.data.data}`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        },
      );
      setUser(res.data.data);
      setLoading(false);
    } catch (e) {
      console.error('getInfo', e);
    }
  };
  //전체 통계 가져오기
  const getAllStatistics = async () => {
    const access = await AsyncStorage.getItem('access_token');
    try {
      const res = await axios.get(`${Config.SERVER_HOST}/trash/summary/all`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      setTrashDataAll(res.data.data);
    } catch (e) {
      console.error('통계', e);
    }
  };

  useEffect(() => {
    getUser();
    getAllStatistics();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={{backgroundColor: '#f7f7f7', flex: 1}}>
          <SafeAreaView style={styles.safeAreaTop} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Info
              user={user}
              navigation={navigation}
              totalSuccess={totalSuccess}
              totalFailure={totalFailure}
            />
            <View
              style={{
                width: '100%',
                height: 9,
                backgroundColor: '#ededed',
                marginBottom: 36,
              }}
            />
            <Statistics
              trashDataAll={trashDataAll}
              totalSuccess={totalSuccess}
            />
            <Achievement achievement={user.achievement} />
            <LogoutBtn navigation={navigation} />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default MyPage;
