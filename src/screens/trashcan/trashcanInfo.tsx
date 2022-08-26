import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SecondaryGlobalLayout} from '../../styles/globalLayout';
import RootStackParamList from '../../types/RootStackParamList';
import TrashCanInfoMain from '../../components/trashcan/TrashCanInfoMain';
import {styles} from '../../App';
import {RegisterBtn} from '../../styles/trashcan/trashcanInfo';
type TrashCanInfoProps = NativeStackScreenProps<
  RootStackParamList,
  'TrashCanInfo'
>;
const TrashCanInfo = ({navigation}: TrashCanInfoProps) => {
  return (
    <SecondaryGlobalLayout>
      <SafeAreaView style={styles.safeAreaTopMinor} />
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
            marginTop: 17,
          }}>
          등록하기
        </Text>
      </RegisterBtn>
    </SecondaryGlobalLayout>
  );
};

export default TrashCanInfo;
