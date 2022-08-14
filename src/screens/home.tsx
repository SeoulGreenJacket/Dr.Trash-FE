import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Alert, Button} from 'react-native';
import QrScanner from '../components/Home/qrScanner';
import CameraBox from '../styles/home/qrScanner';

export interface IQrCodeDataType {
  codeSrtingValue: string;
  target: number;
}

const Home = () => {
  const [qrCode, setQrCode] = useState(false);
  const [qrCodeData, setQrCodeData] = useState<IQrCodeDataType>();
  const onPress = () => {
    setQrCode(prev => !prev);
  };
  useEffect(() => {
    if (qrCodeData !== undefined) {
      Alert.alert('분리배출이 시작됩니다.');
      console.log(qrCodeData);
    }
  });

  return (
    <CameraBox>
      {qrCode ? (
        <QrScanner
          qrCode={qrCode}
          setQrCode={setQrCode}
          setQrCodeData={setQrCodeData}
        />
      ) : (
        <Button title="분리배출 시작하기" onPress={onPress} />
      )}
    </CameraBox>
  );
};

export default Home;
