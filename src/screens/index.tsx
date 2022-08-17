import React, {useEffect, useState} from 'react';
import {KakaoLoginBtn, Title} from '../styles/index';
import {Image, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParamList';
import SignWebView from '../components/common/SignWebView';
import axios from 'axios';
import AsyncStoarge from '@react-native-async-storage/async-storage';
import GlobalLayout from '../styles/globalLayout';
let kakaoLoginImg = require('../../assets/images/kakao_login_medium_wide.png');

export type MainScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Main'
>;

const Start = ({navigation}: MainScreenProps) => {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState({access_token: '', refresh_token: ''});
  const [initToken, setInitToken] = useState<string | null>('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const openLoginView = () => {
    setOpen(true);
  };
  const getToken = async (token: any) => {
    setToken(token);
    await AsyncStoarge.setItem('access_token', token.access_token);
    await AsyncStoarge.setItem('refresh_token', token.refresh_token);
    setOpen(false);
    setLoginSuccess(true);
  };

  const init = async () => {
    let access: string | null = await AsyncStoarge.getItem('access_token');
    setInitToken(access);
    console.log(initToken);
    if (initToken) {
      setLoginSuccess(true);
    } else setLoginSuccess(false);
  };
  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (loginSuccess === true) {
      navigation.navigate('Home');
    }
  }, [loginSuccess]);

  // const logout = async () => {
  //   try {
  //     await axios.get(
  //       'https://kauth.kakao.com/oauth/logout?client_id=bd640091d4a1413f6c3789022f3e8f8a&logout_redirect_uri=http://localhost:3000/auth/logout',
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token.refresh_token}`,
  //         },
  //       },
  //     );
  //     AsyncStoarge.removeItem('access_token');
  //     AsyncStoarge.removeItem('refresh_token');
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  const tokenCheck = async () => {
    let access = await AsyncStoarge.getItem('access_token');
    let refresh = await AsyncStoarge.getItem('refresh_token');
    console.log(access, refresh);
  };
  const tokenDelete = async () => {
    await AsyncStoarge.removeItem('access_token');
    await AsyncStoarge.removeItem('refresh_token');
  };
  const toMain = () => {
    navigation.navigate('Main');
  };
  return (
    <GlobalLayout>
      <Title>Dr.TRASH</Title>
      {open && <SignWebView getToken={getToken} />}
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
