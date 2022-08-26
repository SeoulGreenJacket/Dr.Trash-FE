import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useRef, useState} from 'react';
import GPSIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView from 'react-native-maps';
import {IInputsType, IMapType} from '../../screens/trashcan/trashcanAdd';
import {CurLocBtn, MapWrapper, Target} from '../../styles/trashcan/add';

const Map = ({
  inputs,
  setInputs,
}: {
  inputs: IInputsType;
  setInputs: (prev: any) => void;
}) => {
  const mapRef = useRef<MapView>(null);
  const [curLocation, setCurLocation] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  useEffect(() => {
    Geolocation.getCurrentPosition(({coords}) => {
      const userRegion = {
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      };
      mapRef.current?.animateToRegion(userRegion, 500);
    });
  }, [curLocation]);
  const onRegionChange = (e: any) => {
    setIsMoving(true);
  };
  const onRegionChangeComplete = (e: any) => {
    setIsMoving(false);
    setInputs({
      ...inputs,
      location: {latitude: e.latitude, longitude: e.longitude},
    });
  };
  return (
    <MapWrapper>
      <MapView
        style={{width: '100%', height: '100%'}}
        ref={mapRef}
        showsUserLocation={true}
        userInterfaceStyle="light"
        onRegionChange={onRegionChange}
        onRegionChangeComplete={onRegionChangeComplete}
      />
      <CurLocBtn
        onPress={() => {
          setCurLocation(prev => (prev += 1));
        }}>
        <GPSIcon
          name="crosshairs-gps"
          size={20}
          style={{textAlign: 'center', marginTop: 10}}
        />
      </CurLocBtn>
      <Target>
        <Icon
          name="target"
          size={20}
          color={isMoving ? '#EA4336' : '#000000'}
        />
      </Target>
    </MapWrapper>
  );
};

export default Map;
