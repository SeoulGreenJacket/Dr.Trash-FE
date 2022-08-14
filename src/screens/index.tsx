import React, {useEffect, useState} from 'react';
import {Container, KakaoLoginBtn, Title} from '../styles/home/index';
import {Image, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParamList';
import SignWebView from '../components/common/SignWebView';
import axios from 'axios';
import AsyncStoarge from '@react-native-async-storage/async-storage';
let kakaoLoginImg = require('../../assets/images/kakao_login_medium_wide.png');

export type MainScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Main'
>;

const Loading = () => {
  return <Text>Loading...</Text>;
};

const Main = ({navigation}: MainScreenProps) => {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState({access_token: '', refresh_token: ''});
  const [initToken, setInitToken] = useState<string | null>('');
  const [loading, setLoading] = useState(true);
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
    console.log(access);
  };
  useEffect(() => {
    init();
    if (initToken !== null) {
      setLoading(false);
      setLoginSuccess(true);
    } else setLoginSuccess(false);
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
  return (
    <Container>
      <Title>Dr.TRASH</Title>
      {open && <SignWebView getToken={getToken} />}
      {loading ? (
        <>
          <KakaoLoginBtn onPress={openLoginView}>
            <Image source={kakaoLoginImg} />
          </KakaoLoginBtn>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Main;
