import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {styles} from '../../App';
import PopUpBox from '../../components/main/home/PopUp';
import QrScanner from '../../components/main/home/QrScanner';
import {GlobalLayout} from '../../styles/globalLayout';
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
  BtnWrapper,
} from '../../styles/main/home/bottomBtn';
import {MidBox, InProgressBox} from '../../styles/main/home/MidBox';
import RootStackParamList from '../../types/RootStackParamList';

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
              ? '분리배출 중입니다...'
              : '분리배출이 완료되었습니다.'}
          </Title>
        </TitleBox>
        <HelpText>
          {phase === 'before'
            ? '아래의 카메라를 이용해 QR코드를 스캔해주세요.'
            : phase === 'inProgress'
            ? '지구가 아름다워지는 중입니다.'
            : '포인트가 적립되었습니다.'}
        </HelpText>
      </AlertBox>
      <MidBox>
        {phase === 'before' ? (
          <QrScanner setPhase={setPhase} /> // 카메라 스크린
        ) : phase === 'inProgress' ? (
          <InProgressBox>
            <Text>배출중</Text>
          </InProgressBox> // 배출중
        ) : (
          <PopUpBox myRecord={myRecord} /> // 배출완료
        )}
      </MidBox>
      <BtnWrapper phase={phase}>
        {phase === 'before' ? (
          <>
            <Btn />
            <Btn />
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
        title="쓰레기통 위치찾기"
        onPress={() => {
          navigation.navigate('TrashCanLocation');
        }}
      />
    </GlobalLayout>
  );
};

export default Home;
