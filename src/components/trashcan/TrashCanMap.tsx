import React, {useEffect, useState, useRef} from 'react';
import {View} from 'react-native';
import MapView, {Circle, Marker} from 'react-native-maps';
import CustomMarker from '../common/CustomMarker';
import GPSIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GPSBtn} from '../../styles/trashcan/trashcanLocation';
import Geolocation from '@react-native-community/geolocation';

const TrashCanMap = () => {
  const [location, setLocation] = useState<any>();
  const [moveLocation, setMoveLocation] = useState<any>();
  const [curLocation, setCurLocation] = useState(0);
  const [isCurLocation, setIsCurLocation] = useState(true);
  const locRef = useRef<MapView>(null);

  const [markerList, setMarkerList] = useState([
    {
      coordinate: {latitude: 37.629, longitude: 127.081},
      title: 'Dr.trash 1호',
      description: '서울과학기술대학교 미래관',
      _id: 'first',
    },
    {
      coordinate: {latitude: 36.62, longitude: 127.44},
      title: 'Dr.trash 2호',
      description: '청주시 흥덕구 가경동',
      _id: 'second',
    },
  ]);

  useEffect(() => {
    Geolocation.getCurrentPosition(location => {
      const curRegion = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      };
      setLocation(curRegion);
      setMoveLocation(curRegion);
      locRef.current?.animateToRegion(curRegion, 500);
    });
  }, [curLocation]);

  useEffect(() => {
    if (location !== undefined && moveLocation !== undefined) {
      if (
        location.latitude.toFixed(3) !== moveLocation.latitude.toFixed(3) ||
        location.longitude.toFixed(3) !== moveLocation.longitude.toFixed(3)
      ) {
        setIsCurLocation(false);
      } else if (
        location.latitude.toFixed(3) === moveLocation.latitude.toFixed(3) &&
        location.longitude.toFixed(3) === moveLocation.longitude.toFixed(3)
      ) {
        setIsCurLocation(true);
      }
    }
  }, [moveLocation]);

  const onChangeLocation = (e: any) => {
    setMoveLocation(e);
  };

  const onPressMarker = (id: string) => {
    const pressedMarker = markerList.filter(item => {
      return item._id === id;
    });
    const markerLocation = {
      latitude: pressedMarker[0].coordinate.latitude,
      longitude: pressedMarker[0].coordinate.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    };
    locRef.current?.animateToRegion(markerLocation, 500);
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        showsUserLocation={true}
        userInterfaceStyle="light"
        ref={locRef}
        onRegionChange={e => onChangeLocation(e)}>
        {markerList.map((item, index) => (
          <Marker
            key={index}
            coordinate={item.coordinate}
            title={item.title}
            description={item.description}
            identifier={item._id}
            onPress={() => onPressMarker(item._id)}>
            <CustomMarker />
          </Marker>
        ))}
      </MapView>
      <GPSBtn
        onPress={() => {
          setCurLocation(prev => (prev += 1));
          setIsCurLocation(true);
        }}
        isCurLocation={isCurLocation}>
        {isCurLocation ? (
          <GPSIcon
            name="crosshairs-gps"
            size={20}
            color="white"
            style={{textAlign: 'center', marginTop: 10}}
          />
        ) : (
          <GPSIcon
            name="crosshairs-gps"
            size={20}
            style={{textAlign: 'center', marginTop: 10}}
          />
        )}
      </GPSBtn>
    </View>
  );
};

export default TrashCanMap;
