import React from 'react';
import {Image, View} from 'react-native';

let loadingGIF = require('../../../assets/drtrash/global_load.gif');
const Loading = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={loadingGIF} style={{width: 200, height: 200}} />
    </View>
  );
};

export default Loading;
