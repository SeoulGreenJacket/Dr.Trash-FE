import React from 'react';
import {Container, KakaoLoginBtn, Title} from '../styles/home/index';
import {Image, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParamList';
let kakaoLoginImg = require('../../assets/images/kakao_login_medium_wide.png');

export type MainScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Main'
>;

const Main = ({navigation, route}: MainScreenProps) => {
  return (
    <Container>
      <Title>Dr.TRASH</Title>

      <KakaoLoginBtn>
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
