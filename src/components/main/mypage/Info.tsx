import GlobalLayout from '../../../styles/globalLayout';
import React from 'react';
import {Text} from 'react-native';
import {
  Grade,
  MyPageInfoBox,
  MyPageInfoProfile,
  MyPageInfoText,
  Name,
  MyPageStatus,
  StatusTitle,
  StatusContent,
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
        <MyPageInfoProfile></MyPageInfoProfile>
      </MyPageInfoBox>
      <MyPageStatus>
        <StatusTitle>
          <Text style={{flexGrow: 1}}>랭킹</Text>
          <Text style={{flexGrow: 1}}>포인트</Text>
          <Text style={{flexGrow: 1}}>정확도</Text>
        </StatusTitle>
        <StatusContent>
          <Text style={{flexGrow: 1}}>1등</Text>
          <Text style={{flexGrow: 1}}>1080</Text>
          <Text style={{flexGrow: 1}}>99%</Text>
        </StatusContent>
      </MyPageStatus>
    </>
  );
};

export default Info;