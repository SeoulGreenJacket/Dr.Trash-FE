import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import GPSIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TrashCanMap, {
  preCurLocation,
} from '../../components/trashcan/TrashCanMap';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GPSBtn, TrashCanPlusBtn} from '../../styles/trashcan/trashcanLocation';
import RootStackParamList from '../../types/RootStackParamList';

type TrashCanLocationProps = NativeStackScreenProps<
  RootStackParamList,
  'TrashCanLocation'
>;
const TrashCanLocation = ({navigation}: TrashCanLocationProps) => {
  const [lat, setLat] = useState(preCurLocation.latitude);
  const [long, setLong] = useState(preCurLocation.longitude);
  const [isCurLocation, setIsCurLocation] = useState(true);

  useEffect(() => {
    if (lat !== preCurLocation.latitude || long !== preCurLocation.longitude) {
      setIsCurLocation(false);
    } else setIsCurLocation(true);
  }, [lat, long]);
  const onPressGPSBtn = () => {
    setLat(preCurLocation.latitude);
    setLong(preCurLocation.longitude);
  };
  return (
    <>
      <TrashCanMap setLat={setLat} setLong={setLong} lat={lat} long={long} />
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
      <GPSBtn isCurLocation={isCurLocation} onPress={onPressGPSBtn}>
        <GPSIcon
          name="crosshairs-gps"
          size={20}
          style={{textAlign: 'center', marginTop: 10}}
        />
      </GPSBtn>
    </>
  );
};

export default TrashCanLocation;
