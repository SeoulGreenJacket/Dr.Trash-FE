import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState} from 'react';
import {CameraScreen} from 'react-native-camera-kit';
import Config from 'react-native-config';
import {BeforeBox, Camera} from '../../../styles/main/home/MidBox';
const touch = require('../../../../assets/drtrash/main_touch.png');

const QrScanner = ({
  setPhase,
  setQrCode,
  qrCode,
  detectQrCode,
}: {
  setPhase: (phase: 'before' | 'inProgress' | 'done') => void;
  setQrCode: (qrCode: boolean) => void;
  qrCode: boolean;
  detectQrCode: (qrCode: string) => void;
}) => {
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
