import React, {useEffect, useState} from 'react';
import {
  RankScrollView,
  SubName,
  SubRank,
  SubRankBox,
  SubRanking,
  SubScore,
} from '../../styles/ranking/rank';
import TopRanks from './TopRanks';
import MyRanks from './MyRank';
import useApi from '../../hooks/axios';
import Loading from '../common/Loading';

export interface IRankTypes {
  userId: number;
  point: number;
  userName: string;
}

const RankBox = () => {
  const [rankData, setRankData] = useState<IRankTypes[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const isClosedToBottom = async (e: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = e.nativeEvent;
    if (layoutMeasurement.height + contentOffset.y === contentSize.height) {
      setOffset(offset + 10);
    }
  };
  useEffect(() => {
    (async () => {
      const {
        data: {data},
        status,
      } = await useApi.get('/users/rank', {
        params: {
          limit: 10,
          offset,
        },
      });
      if (status === 200) {
        setRankData((prev: any) => [...prev, ...data]);
        setLoading(false);
      }
    })();
  }, [offset]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TopRanks top3={rankData.slice(0, 3)} />
          <MyRanks />
          <RankScrollView
            onScroll={isClosedToBottom}
            scrollEventThrottle={400}
            showsVerticalScrollIndicator={false}
            style={{borderRadius: 20}}>
            <SubRankBox>
              {rankData?.slice(3).map((person, i) => (
                <SubRank key={person.userId}>
                  <SubRanking>{i + 4}위</SubRanking>
                  <SubName>{person.userName}님</SubName>
                  <SubScore>{person.point}P</SubScore>
                </SubRank>
              ))}
            </SubRankBox>
          </RankScrollView>
        </>
      )}
    </>
  );
};

export default RankBox;
