import React, {useState} from 'react';
import {CameraScreen} from 'react-native-camera-kit';
import {BeforeBox, Camera} from '../../../styles/main/home/MidBox';
const touch = require('../../../../assets/drtrash/main_touch.png');

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
    <Camera
      onPress={() => {
        setQrCode(true);
      }}>
      {qrCode ? (
        <CameraScreen
          scanBarcode={qrCode}
          onReadCode={detectQrCode}
          showFrame={true}
          laserColor={'white'}
        />
      ) : (
        <BeforeBox source={touch} resizeMode="center" />
      )}
    </Camera>
  );
};

export default QrScanner;
