import React, {useEffect, useState} from 'react';
import {Alert, Button} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
import BottomBtn from '../../components/main/home/bottomBtn';
import GlobalLayout from '../../styles/globalLayout';
import {
  AlertBox,
  HelpText,
  Title,
  TitleBox,
} from '../../styles/main/home/alertBox';
import CameraBox from '../../styles/main/home/qrScanner';

interface IQrCodeDataType {
  codeSrtingValue: string;
  target: number;
}

const Home = () => {
  const [phase, setPhase] = useState<'before' | 'inProgress' | 'done'>(
    'before',
  );
  const [qrCode, setQrCode] = useState(false);
  const [qrCodeData, setQrCodeData] = useState<IQrCodeDataType>();
  const detectQrCode = (e: any) => {
    setQrCode(prev => !prev);
    setQrCodeData(e.nativeEvent);
  };
  useEffect(() => {
    if (qrCodeData !== undefined) {
      Alert.alert('분리배출이 시작됩니다.');
      console.log(qrCodeData);
    }
  });
  return (
    <GlobalLayout>
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
        {/* 아래의 카메라를 이용해 QR코드를 스캔해주세요. */}
        <HelpText>
          {phase === 'before'
            ? '아래의 카메라를 이용해 QR코드를 스캔해주세요.'
            : phase === 'inProgress'
            ? '지구가 아름다워지는 중입니다.'
            : '포인트가 적립되었습니다.'}
        </HelpText>
      </AlertBox>
      <CameraBox>
        {qrCode ? (
          <CameraScreen
            scanBarcode={qrCode}
            onReadCode={detectQrCode}
            showFrame={true}
            laserColor={'white'}
          />
        ) : (
          <Button
            title="분리배출 시작하기"
            onPress={() => setQrCode(prev => !prev)}
          />
        )}
      </CameraBox>
      <BottomBtn phase={phase} />
    </GlobalLayout>
  );
};

export default Home;

// 나중에 카메라 컴포넌트 분리하기
