import React, {useEffect, useState} from 'react';
import {
  RankScrollView,
  SubName,
  SubRank,
  SubRankBox,
  SubRanking,
  SubScore,
  TopName,
  TopRank,
  TopRanking,
  TopScore,
} from '../../styles/ranking/rank';
import {RefreshControl} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface IRankTypes {
  userName: string;
  point: number;
}

const RankBox = ({
  reload,
  setReload,
}: {
  reload: boolean;
  setReload: (reload: boolean) => void;
}) => {
  const [rankData, setRankData] = useState<IRankTypes[]>([]);
  const [offset, setOffset] = useState(0);
  const isClosedToBottom = async (e: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = e.nativeEvent;
    if (layoutMeasurement.height + contentOffset.y === contentSize.height) {
      setOffset(offset + 10);
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
  useEffect(() => {
    console.log('offset', offset);
    (async () => {
      const access = await AsyncStorage.getItem('access_token');
      const {data, status} = await axios.get(
        'http://localhost:3000/users/rank',
        {
          params: {
            limit: 10,
            offset,
          },
          headers: {
            Authorization: `Bearer ${access}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (status === 200) {
        setRankData((prev: any) => [...prev, ...data]);
      }
    })();
  }, [offset]);
  return (
    <RankScrollView
      onScroll={isClosedToBottom}
      scrollEventThrottle={400}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={reload} onRefresh={onRefresh} />
      }>
      {rankData?.slice(0, 3).map((person, i) => (
        <TopRank key={person.point}>
          <TopRanking>{i + 1}위</TopRanking>
          <TopName>{person.userName}님</TopName>
          <TopScore>{person.point}P</TopScore>
        </TopRank>
      ))}
      <SubRankBox>
        {rankData?.slice(3).map((person, i) => (
          <SubRank key={person.point}>
            <SubRanking>{i + 4}위</SubRanking>
            <SubName>{person.userName}님</SubName>
            <SubScore>{person.point}P</SubScore>
          </SubRank>
        ))}
      </SubRankBox>
    </RankScrollView>
  );
};

export default RankBox;
