import React, {useEffect, useState, useRef} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import CustomMarker from '../common/CustomMarker';
import GPSIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GPSBtn} from '../../styles/trashcan/trashcanLocation';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TrashCanMap = () => {
  const [location, setLocation] = useState<any>();
  const [moveLocation, setMoveLocation] = useState<any>();
  const [curLocation, setCurLocation] = useState(0);
  const [isCurLocation, setIsCurLocation] = useState(true);
  const locRef = useRef<MapView>(null);

  const [markerList, setMarkerList] = useState([
    {
      id: 0,
      latitude: 0,
      longitude: 0,
      name: '',
      phoneNumber: '',
    },
  ]);

  const getTrashcan = async () => {
    const access = await AsyncStorage.getItem('access_token');
    try {
      const res = await axios.get(`${Config.SERVER_HOST}/trashcans`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      setMarkerList(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getTrashcan();
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(loc => {
      const curRegion = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
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

  const onPressMarker = (id: number) => {
    const pressedMarker = markerList.filter(item => {
      return item.id === id;
    });
    const markerLocation = {
      latitude: pressedMarker[0].latitude,
      longitude: pressedMarker[0].longitude,
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
        {markerList.map(item => (
          <Marker
            key={item.id}
            coordinate={{latitude: item.latitude, longitude: item.longitude}}
            title={item.name}
            description={item.phoneNumber}
            onPress={() => onPressMarker(item.id)}>
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
