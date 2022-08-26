import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../App';
import RankBox from '../components/ranking/RankBox';
import {GlobalLayout} from '../styles/globalLayout';
import {RankHeader, Reloader, Title} from '../styles/ranking/header';
import {
  MyName,
  MyProfile,
  MyRank,
  MyRanking,
  MyRankingBox,
  MyScore,
  MyText,
} from '../styles/ranking/rank';

const myDummyData = {
  name: '박인재',
  rank: 48,
  point: 354,
};

const Ranking = () => {
  const [reload, setReload] = useState(false);
  return (
    <>
      <GlobalLayout>
        <SafeAreaView style={styles.safeAreaTop} />
        <RankHeader>
          <Title>실시간 TOP 10</Title>
          <Reloader reload={reload}>
            {/* <Icon name="sync" size={20} /> */}
          </Reloader>
        </RankHeader>
        <RankBox reload={reload} setReload={setReload} />
      </GlobalLayout>
      <MyRank>
        <MyRankingBox>
          <MyText>내 순위</MyText>
          <MyRanking>{myDummyData.rank}위</MyRanking>
        </MyRankingBox>
        <MyProfile />
        <MyName>{myDummyData.name}님</MyName>
        <MyScore>{myDummyData.point}P</MyScore>
      </MyRank>
      <SafeAreaView style={styles.safeAreaBottom} />
    </>
  );
};

export default Ranking;
