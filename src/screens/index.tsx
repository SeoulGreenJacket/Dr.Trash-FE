import React, {useEffect, useState} from 'react';
import {KakaoLoginBtn, LogoImage, FontImage, Background} from '../styles/index';
import {Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../types/RootStackParamList';
import SignWebView from '../components/common/SignWebView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../components/common/Loading';

let kakaoLoginImg = require('../../assets/kakaologin/kakao_login_medium_wide.png');
let MainIconImg = require('../../assets/drtrash/main_icon.png');
let MainFontImg = require('../../assets/drtrash/drtrash_font1.png');
let bgImg = require('../../assets/drtrash/main_background_blur.png');

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

const Start = ({navigation}: MainScreenProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const openLoginView = () => {
    setOpen(true);
  };
  const onLoginSuccess = async () => {
    setOpen(false);
    setLoginSuccess(true);
  };

  const init = () => {
    AsyncStorage.getItem('access_token').then(res => {
      if (res !== null) {
        setLoginSuccess(true);
      } else {
        setLoginSuccess(false);
        setLoading(false);
      }
    });
  };
  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (loginSuccess === true) {
      navigation.reset({routes: [{name: 'Main'}]});
    }
  }, [loginSuccess, navigation]);

  return (
    <Background source={bgImg}>
      <LogoImage source={MainIconImg} />
      <FontImage source={MainFontImg} />
      {open && <SignWebView onLoginSuccess={onLoginSuccess} />}
      {loading ? (
        <Loading />
      ) : (
        <>
          <KakaoLoginBtn onPress={openLoginView}>
            <Image source={kakaoLoginImg} />
          </KakaoLoginBtn>
        </>
      )}
    </Background>
  );
};

export default Start;
