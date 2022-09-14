import React, {useEffect, useState} from 'react';
import useApi from '../../hooks/axios';
import {MyName, MyRank, MyRanking, MyScore} from '../../styles/ranking/rank';

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

const MyRanks = () => {
  const a = 1;
  const [myData, setMyData] = useState<IMyDataType>();
  useEffect(() => {
    (async () => {
      const {
        data: {data: id},
        status,
      } = await useApi.get('/users');
      if (status === 200) {
        const {
          data: {data},
          status: code,
        } = await useApi.get(`/users/${id}`);
        if (code === 200) {
          setMyData(data);
        }
      }
    })();
  }, [a]);
  return (
    <MyRank>
      <MyRanking>
        <MyRanking>{myData?.rank}위</MyRanking>
      </MyRanking>
      <MyName>{myData?.name}님</MyName>
      <MyScore>{myData?.point}P</MyScore>
    </MyRank>
  );
};

export default MyRanks;
