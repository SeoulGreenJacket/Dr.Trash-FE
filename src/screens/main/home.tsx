import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
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
import useApi from '../../hooks/axios';

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

const Home = ({navigation}: NavProps) => {
  const [id, setId] = useState('ddcd8c24-4fe4-4f87-b197-da65ab63f17f'); // drTrash 1호
  const [phase, setPhase] = useState<'before' | 'inProgress' | 'done'>(
    'before',
  );
  const [myRecord, setMyRecord] = useState<IPopupTypes>(dummyPopUpData);
  const [qrCode, setQrCode] = useState(false);

  // qrCode를 인식하면 uuid를 보내 아두이노에게 전달
  const detectQrCode = async (e: any) => {
    const {uuid} = JSON.parse(e.nativeEvent.codeStringValue);
    setId(uuid);
    setQrCode(false);
    const {data, status} = await useApi.post(`/trash/begin/${id}`);
    if (status === 201 && data) {
      setPhase('inProgress');
    }
  };

  // 배출 종료 버튼을 누르면 아두이노에게 전달
  const stop = async () => {
    const access = await AsyncStorage.getItem('access_token');
    if (access) {
      const {data, status} = await axios.post(`/trash/end/${id}`);
      if (status === 201 && data) {
        setMyRecord(data);
        setPhase('done');
      }
    }
  };
  return (
    <GlobalLayout>
      <SafeAreaView style={styles.safeAreaTop} />
      <AlertBox>
        <TitleBox>
          <Title>
            {phase === 'before'
              ? `${'CWCTBOY'}님,${'\n'}${12}번째 비움이에요!`
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
                <Icon source={require('../../../assets/drtrash/FAQMArk.png')} />
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
      {/* <Button
        title="랭킹 페이지로"
        onPress={() => {
          navigation.navigate('Ranking');
        }}
      /> */}
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
    </GlobalLayout>
  );
};

export default Home;
