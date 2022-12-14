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
    let idRes: any;
    try {
      idRes = await useApi.get('/users');
    } catch (e) {
      console.error('getId', e);
    }
    try {
      const res = await useApi.get(`/users/${idRes.data.data}`);
      setUser(res.data.data);
      console.log('usr', res.data.achievement);
      setLoading(false);
    } catch (e) {
      console.error('getInfo', e);
    }
  };
  //전체 통계 가져오기
  const getAllStatistics = async () => {
    try {
      const res = await useApi.get('/trash/summary');
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
