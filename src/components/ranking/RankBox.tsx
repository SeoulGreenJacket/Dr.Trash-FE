import React from 'react';
import {
  RankScrollView,
  SubName,
  SubProfile,
  SubRank,
  SubRankBox,
  SubRanking,
  SubScore,
  TopName,
  TopProfile,
  TopRank,
  TopRanking,
  TopScore,
} from '../../styles/ranking/rank';
import {RefreshControl} from 'react-native';

const dummyDataProducer = () => {
  const dummyNames = [
    'CWCTBOY',
    'JerryKim',
    'DanielPark',
    '서청운',
    '김기열',
    '박인재',
  ];
  let dummyPerson = {
    name: '',
    rank: 0,
    point: 0,
  };
  const dummyRank = [];
  for (let i = 0; i < 10; i++) {
    dummyPerson.name =
      dummyNames[Math.floor(Math.random() * dummyNames.length)];
    dummyPerson.rank = i + 1;
    dummyPerson.point = Math.floor(Math.random() * 1000);
    dummyRank.push(dummyPerson);
    dummyPerson = {name: '', rank: 0, point: 0};
  }
  return {dummyRank};
};

const RankBox = ({
  reload,
  setReload,
}: {
  reload: boolean;
  setReload: (reload: boolean) => void;
}) => {
  const {dummyRank} = dummyDataProducer();
  const isClosedToBottom = (e: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = e.nativeEvent;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height) {
      console.log('refetch!');
    }
  };
  const onRefresh = () => {
    setReload(true);
    /*
    서버 요청 후 콜백으로 setReload(false) 실행
    */
    setTimeout(() => {
      setReload(false);
    }, 1000);
  };
  return (
    <RankScrollView
      onScroll={isClosedToBottom}
      scrollEventThrottle={400}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={reload} onRefresh={onRefresh} />
      }>
      {dummyRank.slice(0, 3).map(person => (
        <TopRank key={person.rank}>
          <TopRanking>{person.rank}위</TopRanking>
          <TopProfile />
          <TopName>{person.name}님</TopName>
          <TopScore>{person.point}P</TopScore>
        </TopRank>
      ))}
      <SubRankBox>
        {dummyRank.slice(3, 10).map(person => (
          <SubRank key={person.rank}>
            <SubRanking>{person.rank}위</SubRanking>
            <SubProfile />
            <SubName>{person.name}님</SubName>
            <SubScore>{person.point}P</SubScore>
          </SubRank>
        ))}
      </SubRankBox>
    </RankScrollView>
  );
};

export default RankBox;
