import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SecondaryGlobalLayout} from '../../styles/globalLayout';
import RootStackParamList from '../../types/RootStackParamList';
import TrashCanInfoMain from '../../components/trashcan/TrashCanInfoMain';
import {AlertBox, TitleBox, Title} from '../../styles/main/home/alertBox';
import {styles} from '../../App';
type TrashCanInfoProps = NativeStackScreenProps<
  RootStackParamList,
  'TrashCanInfo'
>;
const TrashCanInfo = ({navigation}: TrashCanInfoProps) => {
  return (
    <SecondaryGlobalLayout>
      <SafeAreaView style={styles.safeAreaTopMinor} />
      <AlertBox>
        <TitleBox>
          <Title>총 2건의 쓰레기 통이{'\n'}등록 되었습니다.</Title>
        </TitleBox>
      </AlertBox>
      <TrashCanInfoMain />
      <Button
        title="등록하러 가기"
        onPress={() => navigation.push('TrashCanAdd')}
      />
    </SecondaryGlobalLayout>
  );
};

export default TrashCanInfo;
