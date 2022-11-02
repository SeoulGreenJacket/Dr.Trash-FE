import React from 'react';
import {
  SecondaryRank,
  SecondaryRankBox,
  SecondaryRankImage,
  SecondaryRankInnerBox,
  SecondaryRankName,
  SecondaryRankScore,
  TopRank,
  TopRankBox,
  TopRankImage,
  TopRankInnerBox,
  TopRankName,
  TopRankScore,
  TopRankText,
} from '../../styles/ranking/rank';
import {IRankTypes} from './RankBox';

const earth = require('../../../assets/badges/earthBadge.png');
const rainbow = require('../../../assets/badges/rainbowBadge.png');
const smile = require('../../../assets/badges/smileBadge.png');

const TopRanks = ({top3}: {top3: IRankTypes[]}) => {
  console.log(top3);
  return (
    <TopRank>
      <TopRankBox>
        <TopRankText>1</TopRankText>
        <TopRankInnerBox>
          <TopRankImage source={{uri: top3[0]?.thumbnail}} />
          <TopRankName>{top3[0]?.userName}님</TopRankName>
          <TopRankScore>{top3[0]?.point}p</TopRankScore>
        </TopRankInnerBox>
      </TopRankBox>
      <SecondaryRank>
        {top3.slice(1, 3).map((data, index) => {
          return (
            <SecondaryRankBox key={data.userId}>
              <TopRankText>{index + 2}</TopRankText>
              <SecondaryRankInnerBox>
                <SecondaryRankImage
                  source={{uri: top3[index + 1]?.thumbnail}}
                />
                <SecondaryRankName>{data?.userName}님</SecondaryRankName>
                <SecondaryRankScore>{data?.point}p</SecondaryRankScore>
              </SecondaryRankInnerBox>
            </SecondaryRankBox>
          );
        })}
      </SecondaryRank>
    </TopRank>
  );
};

export default TopRanks;
