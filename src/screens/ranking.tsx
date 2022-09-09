import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../App';
import RankBox from '../components/ranking/RankBox';
import GlobalLayout from '../styles/globalLayout';
import {RankHeader, Title} from '../styles/ranking/header';
import Icon from 'react-native-vector-icons/AntDesign';

const Ranking = () => {
  return (
    <>
      <GlobalLayout>
        <SafeAreaView style={styles.safeAreaTop} />
        <RankHeader>
          <Title>실시간 랭킹 순위</Title>
          <Icon name="exclamationcircleo" size={25} />
        </RankHeader>
        <RankBox />
      </GlobalLayout>
    </>
  );
};

export default Ranking;
