import React from 'react';
import {View, StyleSheet} from 'react-native';
import TrashCanIcon from 'react-native-vector-icons/Ionicons';

const CustomMarker = () => {
  return (
    <View style={styles.marker}>
      <View style={styles.markerCircle}>
        <TrashCanIcon
          name="ios-trash-outline"
          size={27}
          style={{textAlign: 'center', marginTop: 9}}
        />
      </View>
      <View style={styles.markerTriangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    width: 50,
    height: 80,
  },
  markerCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#C6E803',
    borderRadius: 50,
  },
  markerTriangle: {
    width: 0,
    height: 0,
    marginLeft: 16,
    marginTop: -3,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#C6E803',
    transform: [{rotate: '180deg'}],
  },
});

export default CustomMarker;
