import React, {useEffect, useState} from 'react';
import {Alert, Button, View} from 'react-native';
import QrScanner from '../components/Home/qrScanner';

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
    }
  }, [qrCodeData]);
  return (
    <View>
      <Button title="camera" onPress={onPress} />
      {qrCode && (
        <QrScanner
          qrCode={qrCode}
          setQrCode={setQrCode}
          setQrCodeData={setQrCodeData}
        />
      )}
    </View>
  );
};

export default Home;
