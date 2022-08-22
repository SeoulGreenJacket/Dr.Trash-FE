import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import GlobalLayout from '../../styles/globalLayout';
import RootStackParamList from '../../types/RootStackParamList';
import TrashCanInfoMain from '../../components/trashcan/TrashCanInfoMain';
import {RegisterBtn} from '../../styles/trashcan/trashcanInfo';
type TrashCanInfoProps = NativeStackScreenProps<
  RootStackParamList,
  'TrashCanInfo'
>;
const TrashCanInfo = ({navigation}: TrashCanInfoProps) => {
  return (
    <GlobalLayout>
      <TrashCanInfoMain />
      <RegisterBtn
        onPress={() => {
          navigation.navigate('TrashCanAdd');
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 15,
          }}>
          등록하기
        </Text>
      </RegisterBtn>
    </GlobalLayout>
  );
};

export default TrashCanInfo;
