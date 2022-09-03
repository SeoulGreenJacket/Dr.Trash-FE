import React from 'react';
import {DoneBox, DoneBoxImage} from '../../../styles/main/home/MidBox';
import {
  Body,
  DataBox,
  Date,
  DateText,
  Dot,
  Header,
  HeaderText,
  LeftSide,
  LeftText,
  Result,
  RightText,
  Sector,
  Sector2,
  Template,
} from '../../../styles/main/home/template';
import Icon from 'react-native-vector-icons/AntDesign';

const template = require('../../../../assets/drtrash/main_done_template.png');

const PopUpBox = ({myRecord}: {myRecord: any}) => {
  return (
    <DoneBox>
      <DoneBoxImage source={template} />
      <Template>
        <Header>
          <Icon name="checkcircle" size={27} color="#5AC400" />
          <HeaderText>배출 리스트</HeaderText>
        </Header>
        <Sector />
        <Body>
          <Date>
            <DateText>Today</DateText>
            <DateText>2022.08.18</DateText>
          </Date>
          <Result>
            <DataBox>
              <LeftSide>
                <Dot />
                <LeftText>쓰레기 종류</LeftText>
              </LeftSide>
              <RightText>플라스틱</RightText>
            </DataBox>
            <Sector2 />
            <DataBox>
              <LeftSide>
                <Dot />
                <LeftText>정확도</LeftText>
              </LeftSide>
              <RightText>75%</RightText>
            </DataBox>
            <Sector2 />
            <DataBox>
              <LeftSide>
                <Dot />
                <LeftText>잘 버림 포인트</LeftText>
              </LeftSide>
              <RightText>+800pt</RightText>
            </DataBox>
            <Sector2 />
            <DataBox>
              <LeftSide>
                <Dot />
                <LeftText>원래 포인트</LeftText>
              </LeftSide>
              <RightText>100pt</RightText>
            </DataBox>
          </Result>
        </Body>
      </Template>
    </DoneBox>
  );
};

export default PopUpBox;
