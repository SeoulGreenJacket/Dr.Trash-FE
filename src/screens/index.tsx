import React, {useEffect, useState} from 'react';
import {KakaoLoginBtn, Title} from '../styles/index';
import {Image, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../types/RootStackParamList';
import SignWebView from '../components/common/SignWebView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalLayout} from '../styles/globalLayout';
let kakaoLoginImg = require('../../assets/images/kakao_login_medium_wide.png');

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

const Start = ({navigation}: MainScreenProps) => {
  const [open, setOpen] = useState(false);
  const [initToken, setInitToken] = useState<string | null>('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const openLoginView = () => {
    setOpen(true);
  };
  const onLoginSuccess = async () => {
    setOpen(false);
    setLoginSuccess(true);
  };

  const init = async () => {
    let access: string | null = await AsyncStorage.getItem('access_token');
    setInitToken(access);
    if (initToken) {
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
    }
  };
  useEffect(() => {
    init();
  });
  useEffect(() => {
    if (loginSuccess === true) {
      navigation.navigate('Main');
    }
  }, [loginSuccess, navigation]);

  const tokenCheck = async () => {
    let access = await AsyncStorage.getItem('access_token');
    let refresh = await AsyncStorage.getItem('refresh_token');
    console.log('access', access, 'refresh', refresh);
  };
  const tokenDelete = async () => {
    await AsyncStorage.removeItem('access_token');
    await AsyncStorage.removeItem('refresh_token');
  };
  const toMain = () => {
    navigation.navigate('Main');
  };
  return (
    <GlobalLayout>
      <Title>Dr.TRASH</Title>
      {open && <SignWebView onLoginSuccess={onLoginSuccess} />}
      <KakaoLoginBtn onPress={openLoginView}>
        <Image source={kakaoLoginImg} />
      </KakaoLoginBtn>
      <Button title="메인페이지로" onPress={toMain} />
      <Button title="토큰확인" onPress={tokenCheck} />
      <Button title="토큰삭제" onPress={tokenDelete} />
    </GlobalLayout>
  );
};

export default Start;
