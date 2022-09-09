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

const TopRanks = ({top3}: {top3: IRankTypes[]}) => {
  return (
    <TopRank>
      <TopRankBox>
        <TopRankText>1</TopRankText>
        <TopRankInnerBox>
          <TopRankImage />
          <TopRankName>{top3[0].userName}님</TopRankName>
          <TopRankScore>{top3[0].point}p</TopRankScore>
        </TopRankInnerBox>
      </TopRankBox>
      <SecondaryRank>
        <SecondaryRankBox>
          <TopRankText>2</TopRankText>
          <SecondaryRankInnerBox>
            <SecondaryRankImage />
            <SecondaryRankName>{top3[1].userName}님</SecondaryRankName>
            <SecondaryRankScore>{top3[1].point}p</SecondaryRankScore>
          </SecondaryRankInnerBox>
        </SecondaryRankBox>
        <SecondaryRankBox>
          <TopRankText>3</TopRankText>
          <SecondaryRankInnerBox>
            <SecondaryRankImage />
            <SecondaryRankName>{top3[2].userName}님</SecondaryRankName>
            <SecondaryRankScore>{top3[2].point}p</SecondaryRankScore>
          </SecondaryRankInnerBox>
        </SecondaryRankBox>
      </SecondaryRank>
    </TopRank>
  );
};

export default TopRanks;
