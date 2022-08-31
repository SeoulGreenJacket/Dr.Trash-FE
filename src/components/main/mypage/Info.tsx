import React from 'react';
import {Text} from 'react-native';
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

const Info = () => {
  return (
    <>
      <MyPageInfoBox>
        <MyPageInfoText>
          <Grade>Grand master</Grade>
          <Name>
            실천하는
            {'\n'}
            김기열님.
          </Name>
        </MyPageInfoText>
        <MyPageInfoProfile />
      </MyPageInfoBox>
      <MyPageStatus>
        <StatusTitle>
          <TitleText style={{flexGrow: 1}}>랭킹</TitleText>
          <TitleText style={{flexGrow: 1}}>포인트</TitleText>
          <TitleText style={{flexGrow: 1}}>정확도</TitleText>
        </StatusTitle>
        <StatusContent>
          <ContentText style={{flexGrow: 1}}>1등</ContentText>
          <ContentText style={{flexGrow: 1}}>1080p</ContentText>
          <ContentText style={{flexGrow: 1}}>99%</ContentText>
        </StatusContent>
      </MyPageStatus>
    </>
  );
};

export default Info;
