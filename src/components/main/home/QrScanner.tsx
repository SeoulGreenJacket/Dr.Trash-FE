import React from 'react';
import {CameraScreen} from 'react-native-camera-kit';
import {BeforeBox, Camera} from '../../../styles/main/home/MidBox';
const touch = require('../../../../assets/drtrash/main_touch.png');

const QrScanner = ({
  setQrCode,
  qrCode,
  detectQrCode,
  connectArduinoByClick,
}: {
  setQrCode: (qrCode: boolean) => void;
  qrCode: boolean;
  detectQrCode: (qrCode: string) => void;
  connectArduinoByClick: () => void;
}) => {
  return (
    <Camera
      // onPress={connectArduinoByClick}
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
