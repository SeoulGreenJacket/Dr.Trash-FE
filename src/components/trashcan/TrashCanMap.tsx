import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import CustomMarker from '../common/CustomMarker';

export const preCurLocation = {
  latitude: 37.629,
  longitude: 127.081,
};
interface MapProps {
  setLat: (s1: number) => void;
  setLong: (s2: number) => void;
  lat: number;
  long: number;
}
const TrashCanMap = ({setLat, setLong, lat, long}: MapProps) => {
  const [latDelta, setLatDelta] = useState(0.0922);
  const [longDelta, setLongDelta] = useState(0.0922);

  const onChangeLocation = (e: any) => {
    setLat(e.latitude);
    setLong(e.longitude);
    setLatDelta(e.latitudeDelta);
    setLongDelta(e.longitudeDelta);
  };
  const onChangeDelta = () => {
    setLatDelta(0.003);
    setLongDelta(0.003);
  };
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: latDelta,
          longitudeDelta: longDelta,
        }}
        onRegionChange={e => onChangeLocation(e)}>
        <Marker
          coordinate={{latitude: 37.629, longitude: 127.081}}
          title="Dr.Trash 1호"
          description="서울과학기술대학교 미래관"
          onPress={onChangeDelta}>
          <CustomMarker />
        </Marker>
        <Marker
          coordinate={{latitude: 36.62, longitude: 127.44}}
          title="Dr.Trash 2호"
          description="청주시 흥덕구 가경동">
          <CustomMarker />
        </Marker>
      </MapView>
    </View>
  );
};

export default TrashCanMap;
