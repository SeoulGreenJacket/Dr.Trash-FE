import React from 'react';
import {CameraScreen} from 'react-native-camera-kit';
import {IQrCodeDataType} from '../../screens/home';

const QrScanner = ({
  qrCode,
  setQrCode,
  setQrCodeData,
}: {
  qrCode: boolean;
  setQrCode: (arg: (prev: boolean) => boolean) => void;
  setQrCodeData: (arg: IQrCodeDataType) => void;
}) => {
  const detectQrCode = (e: any) => {
    setQrCode(prev => !prev);
    setQrCodeData(e.nativeEvent);
  };
  return (
    <CameraScreen
      scanBarcode={qrCode}
      onReadCode={detectQrCode}
      showFrame={true}
      laserColor={'white'}
    />
  );
};

export default QrScanner;
