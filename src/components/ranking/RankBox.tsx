import React, {useEffect, useState} from 'react';
import {
  RankScrollView,
  SubName,
  SubRank,
  SubRankBox,
  SubRanking,
  SubScore,
} from '../../styles/ranking/rank';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
import TopRanks from './TopRanks';

export interface IRankTypes {
  id: number;
  userName: string;
  point: number;
}

const dummyRankProducer = [
  {id: 1, userName: '김철수', point: 100},
  {id: 2, userName: '김영희', point: 90},
  {id: 3, userName: '김민수', point: 80},
  {id: 4, userName: '김영수', point: 70},
  {id: 5, userName: '김민희', point: 60},
  {id: 6, userName: '김철희', point: 50},
  {id: 7, userName: '김민영', point: 40},
  {id: 8, userName: '김영철', point: 30},
  {id: 9, userName: '김철영', point: 20},
  {id: 10, userName: '김수민', point: 10},
];

const RankBox = () => {
  const [rankData, setRankData] = useState<IRankTypes[]>(dummyRankProducer);
  // const [offset, setOffset] = useState(0);
  // const isClosedToBottom = async (e: any) => {
  //   const {layoutMeasurement, contentOffset, contentSize} = e.nativeEvent;
  //   if (layoutMeasurement.height + contentOffset.y === contentSize.height) {
  //     setOffset(offset + 10);
  //   }
  // };
  // useEffect(() => {
  //   (async () => {
  //     const access = await AsyncStorage.getItem('access_token');
  //     const {data, status} = await axios.get(
  //       `${Config.SERVER_HOST}/users/rank`,
  //       {
  //         params: {
  //           limit: 10,
  //           offset,
  //         },
  //         headers: {
  //           Authorization: `Bearer ${access}`,
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );
  //     if (status === 200) {
  //       setRankData((prev: any) => [...prev, ...data]);
  //     }
  //   })();
  // }, [offset]);
  return (
    <>
      <TopRanks top3={rankData.slice(0, 3)} />
      <RankScrollView
        // onScroll={isClosedToBottom}
        scrollEventThrottle={400}
        showsVerticalScrollIndicator={false}>
        <SubRankBox>
          {rankData?.slice(3).map((person, i) => (
            <SubRank key={person.id}>
              <SubRanking>{i + 4}위</SubRanking>
              <SubName>{person.userName}님</SubName>
              <SubScore>{person.point}P</SubScore>
            </SubRank>
          ))}
        </SubRankBox>
      </RankScrollView>
    </>
  );
};

export default RankBox;
