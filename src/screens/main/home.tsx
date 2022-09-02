import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, Image, SafeAreaView, Text} from 'react-native';
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
  IconBox,
} from '../../styles/main/home/bottomBtn';
import {MidBox, InProgressBox, LoadingBox} from '../../styles/main/home/MidBox';
import RootStackParamList from '../../types/RootStackParamList';
import CustomMarker from '../../components/common/CustomMarker';

type NavProps = NativeStackScreenProps<RootStackParamList, 'Ranking'>;

const dummyPopUpData = {
  date: new Date(),
  species: '플라스틱',
  success: 7,
  fail: 3,
};

const Home = ({navigation}: NavProps) => {
  const [phase, setPhase] = useState<'before' | 'inProgress' | 'done'>(
    'before',
  );

  const [myRecord, setMyRecord] = useState(dummyPopUpData);
  const pressBtn = async () => {
    if (phase === 'inProgress') {
      /*
      서버에 배출 중단 요청 + 배출데이터 전송
      */
      // setMyRecord(서버에서 받은 데이터);
      setPhase('done');
    }
    if (phase === 'done') {
      setPhase('before');
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
          <QrScanner setPhase={setPhase} /> // 카메라 스크린
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
                <CustomMarker />
              </IconBox>
            </Btn>
            <Btn>
              <BtnTxt>자주 묻는{'\n'}질문</BtnTxt>
              <IconBox>
                <CustomMarker />
              </IconBox>
            </Btn>
          </>
        ) : (
          <BackBtn onPress={pressBtn}>
            <BackBtnTxt>
              {phase === 'inProgress' ? '끝내기' : '홈으로'}
            </BackBtnTxt>
          </BackBtn>
        )}
      </BtnWrapper>
      <Button
        title="랭킹 페이지로"
        onPress={() => {
          navigation.navigate('Ranking');
        }}
      />
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
