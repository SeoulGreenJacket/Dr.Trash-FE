import React, {useState} from 'react';
import {Button} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';

const QrScanner = ({
  setPhase,
}: {
  setPhase: (phase: 'before' | 'inProgress' | 'done') => void;
}) => {
  const [qrCode, setQrCode] = useState(false);
  const detectQrCode = async (e: any) => {
    console.log(e.nativeEvent);
    /*
    qrData를 서버에 전송하는 과정
    */
    setPhase('inProgress');
  };
  return (
    <>
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
          onPress={() => {
            setQrCode(true);
          }}
        />
      )}
    </>
  );
};

export default QrScanner;
