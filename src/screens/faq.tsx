import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../App';
import FaqMain from '../components/faq/FaqMain';

const Faq = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f7f7f7', position: 'relative'}}>
      <SafeAreaView style={styles.safeAreaTop} />
      <FaqMain />
    </View>
  );
};

export default Faq;
