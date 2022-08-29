import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../App';
import GlobalLayout from '../../styles/globalLayout';
import {MiddleLine} from '../../styles/main/community';
import Alert from '../../components/main/community/Title';
import SummaryBox from '../../components/main/community/Summary';

const Community = () => {
  return (
    <GlobalLayout>
      <SafeAreaView style={styles.safeAreaTop} />
      <Alert />
      <SummaryBox name="인기 글" />
      <MiddleLine />
      <SummaryBox name="전체 글" />
    </GlobalLayout>
  );
};

export default Community;
