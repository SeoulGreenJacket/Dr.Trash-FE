import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import {styles} from '../../App';
import PopUpBox from '../../components/main/home/PopUp';
import QrScanner from '../../components/main/home/QrScanner';
import GlobalLayout from '../../styles/globalLayout';

const loading = require('../../../assets/drtrash/main_load.gif');
import {
  AlertBox,
  HelpText,
  Title,
  TitleBox,
} from '../../styles/main/home/alertBox';
import {
  BackBtn,
  BackBtnTxt,
  Btn,
  BtnTxt,
  BtnWrapper,
  Icon,
  IconBox,
} from '../../styles/main/home/bottomBtn';
import {MidBox, InProgressBox, LoadingBox} from '../../styles/main/home/MidBox';
import RootStackParamList from '../../types/RootStackParamList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
import Loading from '../../components/common/Loading';

export interface IPopupTypes {
  date: Date;
  type: string;
  success: number;
  failure: number;
  point: number;
  totalPoint: number;
}

type NavProps = NativeStackScreenProps<RootStackParamList, 'Ranking'>;

const dummyPopUpData = {
  date: new Date(),
  type: '플라스틱',
  success: 80,
  failure: 10,
  point: 120,
  totalPoint: 820,
};

const remoteHost = Config.SERVER_HOST;
const localHost = 'http://localhost:3000';

const Home = ({navigation}: NavProps) => {
  const [id, setId] = useState('efda44d1-03df-48a6-b91c-79f98b4bfb4f');
  const [phase, setPhase] = useState<'before' | 'inProgress' | 'done'>(
    'before',
  );
  const [myRecord, setMyRecord] = useState<IPopupTypes>(dummyPopUpData);
  const [qrCode, setQrCode] = useState(false);
  const [userName, setUserName] = useState('');
  const [initLoad, setInitLoad] = useState(true);
  const [throwCount, setThrowCount] = useState(0);
  // qrCode를 인식하면 uuid를 보내 아두이노에게 전달
  const detectQrCode = async (e: any) => {
    const {uuid} = JSON.parse(e.nativeEvent.codeStringValue);
    setId(uuid);
    const access = await AsyncStorage.getItem('access_token');
    if (uuid && access) {
      setQrCode(false);
      console.log('uuid', id);
      console.log('access', access);
      const {data, status} = await axios.post(
        `${remoteHost}/trash/begin/${id}`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        },
      );
      if (status === 201) {
        setPhase('inProgress');
      }
    }
  };

  // 배출 종료 버튼을 누르면 아두이노에게 전달
  const stop = async () => {
    const access = await AsyncStorage.getItem('access_token');
    if (access) {
      const {data, status} = await axios.post(`${remoteHost}/trash/end/${id}`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      if (status === 201) {
        setMyRecord(data);
        setPhase('done');
      }
    }
  };
  //유저 이름과 횟수 가져오기
  const getUserNameAndCount = async () => {
    const access = await AsyncStorage.getItem('access_token');
    let idRes: any;
    try {
      idRes = await axios.get(`${Config.SERVER_HOST}/users`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      console.log(idRes.data);
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
      setUserName(res.data.data.name);
      setInitLoad(false);
    } catch (e) {
      console.error('getInfo', e);
    }
    try {
      const res = await axios.get(`${Config.SERVER_HOST}/users/count`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      setThrowCount(res.data.data);
    } catch (e) {
      console.error('throwCount', e);
    }
  };
  useEffect(() => {
    getUserNameAndCount();
  }, []);

  return (
    <GlobalLayout>
      <SafeAreaView style={styles.safeAreaTop} />
      {initLoad ? (
        <Loading />
      ) : (
        <>
          <AlertBox>
            <TitleBox>
              <Title>
                {phase === 'before'
                  ? `${userName}님,${'\n'}${throwCount}번째 비움이에요!`
                  : phase === 'inProgress'
                  ? '배출 중 입니다...'
                  : '분리배출이 완료되었습니다.'}
              </Title>
            </TitleBox>
            <HelpText>
              {phase === 'before'
                ? '아래의 카메라를 이용해 QR코드를 스캔해주세요.'
                : phase === 'inProgress'
                ? '배출이 끝나면 종료하기를 눌러주새요.'
                : '포인트가 적립되었습니다.'}
            </HelpText>
          </AlertBox>
          <MidBox>
            {phase === 'before' ? (
              <QrScanner
                setQrCode={setQrCode}
                qrCode={qrCode}
                detectQrCode={detectQrCode}
              /> // 카메라 스크린
            ) : phase === 'inProgress' ? (
              <InProgressBox>
                <LoadingBox source={loading} />
              </InProgressBox> // 배출중
            ) : phase === 'done' ? (
              <PopUpBox myRecord={myRecord} /> // 배출완료
            ) : null}
          </MidBox>
          <BtnWrapper phase={phase}>
            {phase === 'before' ? (
              <>
                <Btn
                  onPress={() => {
                    navigation.navigate('TrashCanLocation');
                  }}>
                  <BtnTxt>쓰레기통{'\n'}위치 찾기</BtnTxt>
                  <IconBox>
                    <Icon
                      source={require('../../../assets/drtrash/trashcanMark.png')}
                    />
                  </IconBox>
                </Btn>
                <Btn
                  onPress={async () => {
                    await AsyncStorage.removeItem('access_token');
                    await AsyncStorage.removeItem('refresh_token');
                  }}>
                  <BtnTxt>자주 묻는{'\n'}질문</BtnTxt>
                  <IconBox>
                    <Icon
                      source={require('../../../assets/drtrash/FAQMArk.png')}
                    />
                  </IconBox>
                </Btn>
              </>
            ) : (
              <BackBtn
                onPress={
                  phase === 'inProgress'
                    ? stop
                    : () => {
                        setPhase('before');
                      }
                }>
                <BackBtnTxt>
                  {phase === 'inProgress' ? '끝내기' : '홈으로'}
                </BackBtnTxt>
              </BackBtn>
            )}
          </BtnWrapper>
          <Button title="쓰레기통 연결" onPress={detectQrCode} />
          <Button
            title="mode change"
            onPress={() => {
              setPhase(
                phase === 'before'
                  ? 'inProgress'
                  : phase === 'inProgress'
                  ? 'done'
                  : 'before',
              );
            }}
          />
        </>
      )}
    </GlobalLayout>
  );
};

export default Home;
