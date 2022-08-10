import React, {useEffect, useState} from 'react';
import {Container, KakaoLoginBtn, Title} from '../styles/home/index';
import {Image, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParamList';
import SignWebView from '../components/common/SignWebView';
import axios from 'axios';
let kakaoLoginImg = require('../../assets/images/kakao_login_medium_wide.png');

export type MainScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Main'
>;

const Main = ({navigation, route}: MainScreenProps) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<string>('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const openLoginView = () => {
    setOpen(true);
    setStep('code');
  };
  const codeComplete = (code: string) => {
    setStep('token');
  };
  const tokenComplete = () => {};
  useEffect(() => {
    if (loginSuccess === true) {
      navigation.navigate('Home');
    }
  }, [loginSuccess]);

  return (
    <Container>
      <Title>Dr.TRASH</Title>
      {open && <SignWebView />}
      <KakaoLoginBtn onPress={openLoginView}>
        <Image source={kakaoLoginImg} />
      </KakaoLoginBtn>
      <Button
        title="메인페이지로"
        onPress={() => navigation.navigate('Home')}
      />
    </Container>
  );
};

export default Main;
