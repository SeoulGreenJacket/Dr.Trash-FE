import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import TrashCanMap from '../../components/trashcan/TrashCanMap';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TrashCanPlusBtn} from '../../styles/trashcan/trashcanLocation';
import RootStackParamList from '../../types/RootStackParamList';

type TrashCanLocationProps = NativeStackScreenProps<
  RootStackParamList,
  'TrashCanLocation'
>;
const TrashCanLocation = ({navigation}: TrashCanLocationProps) => {
  return (
    <>
      <TrashCanMap />
      <TrashCanPlusBtn
        onPress={() => {
          navigation.navigate('TrashCanInfo');
        }}>
        <Icon
          name="plus"
          size={20}
          style={{textAlign: 'center', marginTop: 10}}
        />
      </TrashCanPlusBtn>
    </>
  );
};

export default TrashCanLocation;
