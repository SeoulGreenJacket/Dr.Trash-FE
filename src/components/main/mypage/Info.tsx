import React from 'react';
import {Image} from 'react-native';
import {
  Grade,
  MyPageInfoBox,
  MyPageInfoProfile,
  MyPageInfoText,
  MyPageStatus,
  Name,
  StatusContent,
  StatusTitle,
  TitleText,
  ContentText,
} from '../../../styles/main/mypage/info';

interface UserType {
  user: {
    achievement?: string[];
    id?: number;
    name: string;
    point: number;
    rank: number;
    thumbnail: string;
    userGrade: string;
  };
}

const Info = ({user}: UserType) => {
  return (
    <>
      <MyPageInfoBox>
        <MyPageInfoText>
          <Grade>{user.userGrade}</Grade>
          <Name>
            실천하는
            {'\n'}
            {user.name}님
          </Name>
        </MyPageInfoText>
        <MyPageInfoProfile>
          <Image
            source={{uri: user.thumbnail}}
            style={{width: '100%', height: '100%', borderRadius: 100}}
          />
        </MyPageInfoProfile>
      </MyPageInfoBox>
      <MyPageStatus>
        <StatusTitle>
          <TitleText style={{flexGrow: 1}}>랭킹</TitleText>
          <TitleText style={{flexGrow: 1}}>포인트</TitleText>
          <TitleText style={{flexGrow: 1}}>정확도</TitleText>
        </StatusTitle>
        <StatusContent>
          <ContentText style={{flexGrow: 1}}>{user.rank}등</ContentText>
          <ContentText style={{flexGrow: 1}}>{user.point}p</ContentText>
          <ContentText style={{flexGrow: 1}}>?%</ContentText>
        </StatusContent>
      </MyPageStatus>
    </>
  );
};

export default Info;
