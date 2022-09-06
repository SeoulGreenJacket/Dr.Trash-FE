import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../App';
import RankBox from '../components/ranking/RankBox';
import GlobalLayout from '../styles/globalLayout';
import {RankHeader, Title} from '../styles/ranking/header';
import {
  MyName,
  MyRank,
  MyRanking,
  MyRankingBox,
  MyScore,
  MyText,
} from '../styles/ranking/rank';
import Config from 'react-native-config';

interface IMyDataType {
  id: number;
  name: string;
  thumbnail: string;
  point: number;
  userGrade: string;
  achievement: [
    {
      id: number;
      name: string;
      description: string;
      imageUri: string;
      achievedAt: Date;
    },
  ];
  rank: number;
}

const Ranking = () => {
  const [myData, setMyData] = useState<IMyDataType>();
  useEffect(() => {
    (async () => {
      const access = await AsyncStorage.getItem('access_token');
      const {data: id, status} = await axios.get(
        `${Config.SERVER_HOST}/users`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        },
      );
      if (status === 200) {
        const {data, status: code} = await axios.get(
          `${Config.SERVER_HOST}/users/${id}`,
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          },
        );
        if (code === 200) {
          setMyData(data);
        }
      }
    })();
  });
  return (
    <>
      <GlobalLayout>
        <SafeAreaView style={styles.safeAreaTop} />
        <RankHeader>
          <Title>실시간 TOP 10</Title>
        </RankHeader>
        <RankBox />
      </GlobalLayout>
      <MyRank>
        <MyRankingBox>
          <MyText>내 순위</MyText>
          <MyRanking>{myData?.rank}위</MyRanking>
        </MyRankingBox>
        <MyName>{myData?.name}님</MyName>
        <MyScore>{myData?.point}P</MyScore>
      </MyRank>
      <SafeAreaView style={styles.safeAreaBottomRank} />
    </>
  );
};

export default Ranking;
