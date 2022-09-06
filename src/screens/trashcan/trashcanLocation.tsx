import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import TrashCanMap from '../../components/trashcan/TrashCanMap';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TrashCanPlusBtn} from '../../styles/trashcan/trashcanLocation';
import RootStackParamList from '../../types/RootStackParamList';
import Loading from '../../components/common/Loading';

type TrashCanLocationProps = NativeStackScreenProps<
  RootStackParamList,
  'TrashCanLocation'
>;
const TrashCanLocation = ({navigation}: TrashCanLocationProps) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TrashCanMap />
          <TrashCanPlusBtn
            onPress={() => {
              navigation.navigate('TrashCanInfo');
            }}>
            <Icon
              name="plus"
              size={20}
              color="white"
              style={{textAlign: 'center', marginTop: 10}}
            />
          </TrashCanPlusBtn>
        </>
      )}
    </>
  );
};

export default TrashCanLocation;
