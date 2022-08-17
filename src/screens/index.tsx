import React from 'react';
import {KakaoLoginBtn, Title} from '../styles/index';
import {Image, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParamList';
import GlobalLayout from '../styles/globalLayout';
let kakaoLoginImg = require('../../assets/images/kakao_login_medium_wide.png');

export type MainScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Main'
>;

const Start = ({navigation}: MainScreenProps) => {
  return (
    <GlobalLayout>
      <Title>Dr.TRASH</Title>
      <KakaoLoginBtn>
        <Image source={kakaoLoginImg} />
      </KakaoLoginBtn>
      <Button
        title="메인페이지로"
        onPress={() => navigation.navigate('Main')}
      />
    </GlobalLayout>
  );
};

export default Start;
