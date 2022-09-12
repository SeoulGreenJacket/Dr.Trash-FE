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
import useApi from '../../hooks/axios';
import Loading from '../../components/common/Loading';

export interface IPopupTypes {
  Date: string;
  type: string;
  success: number;
  failure: number;
  totalPoint: number;
}

type NavProps = NativeStackScreenProps<RootStackParamList, 'Ranking'>;

const Home = ({navigation}: NavProps) => {
  const [id, setId] = useState(0);
  const [phase, setPhase] = useState<'before' | 'inProgress' | 'done'>(
    'before',
  );
  const [myRecord, setMyRecord] = useState<IPopupTypes>();
  const [qrCode, setQrCode] = useState(false);
  const [userName, setUserName] = useState('');
  const [initLoad, setInitLoad] = useState(true);
  const [throwCount, setThrowCount] = useState(0);
  // qrCode를 인식하면 uuid를 보내 아두이노에게 전달
  const detectQrCode = async (e: any) => {
    const {uuid} = JSON.parse(e.nativeEvent.codeStringValue);
    setQrCode(false);
    try {
      const {
        data: {data: ident},
        status,
      } = await useApi.post(
        `/trash/begin/${uuid}`,
        // 'ddcd8c24-4fe4-4f87-b197-da65ab63f17f'
      );
      setId(ident);
      setPhase('inProgress');
    } catch (e) {
      console.error(e);
    }
  };

  // 배출 종료 버튼을 누르면 아두이노에게 전달
  const stop = async () => {
    const {
      data: {achievement, data},
      status,
    } = await useApi.post(`/trash/end?usageId=${id}`);
    if (status === 201) {
      setMyRecord(data);
      setPhase('done');
    }
  };

  //유저 이름과 횟수 가져오기
  const getUserNameAndCount = async () => {
    let idRes: any;
    try {
      idRes = await useApi.get('/users');
    } catch (e) {
      console.error('getId', e);
    }
    try {
      const res = await useApi.get(`/users/${idRes.data.data}`);
      setUserName(res.data.data.name);
      setInitLoad(false);
      console.log(idRes.data.data);
    } catch (e) {
      console.error('getInfo', e);
    }
    try {
      const res = await useApi.get(`/users/count`);
      setThrowCount(res.data.data);
      setInitLoad(false);
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
                <Btn>
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
          <Button title="연결하기" onPress={detectQrCode} />
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
