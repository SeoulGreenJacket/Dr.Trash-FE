import React, {useState} from 'react';
import {DoneBox, DoneBoxImage} from '../../../styles/main/home/MidBox';
import {
  Accuracy,
  AccuracyBar,
  Body,
  DataBox,
  Date as DateBox,
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
import {IPopupTypes} from '../../../screens/main/home';
import AchieveModal from './AchieveModal';
const template = require('../../../../assets/drtrash/main_done_template.png');

const dummyAchievement = [
  {
    description: 'Dr.Trash 첫 이용!',
    id: 1,
    imageUri: 'http://seheon.email:3500/images/badges/earth-saver.png',
    name: '지구지키미',
  },
  {
    description: '랭킹 3등 이상 달성!',
    id: 2,
    imageUri: 'http://seheon.email:3500/images/badges/ranker.png',
    name: 'Dr.Trash 랭커',
  },
];

const PopUpBox = ({myRecord}: {myRecord: IPopupTypes | undefined}) => {
  const date = new Date(myRecord!.data.date);
  const year = date.getFullYear().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const acuuracy =
    (myRecord!.data.success /
      (myRecord!.data.success + myRecord!.data.failure)) *
    100;
  const addPoint = myRecord!.data.success * 10;

  return (
    <>
      {dummyAchievement.map(achievement => (
        <AchieveModal key={achievement.id} achievement={achievement} />
      ))}
      <DoneBox>
        <DoneBoxImage source={template} />
        <Template>
          <Header>
            <Icon name="checkcircle" size={27} color="#5AC400" />
            <HeaderText>배출 리스트</HeaderText>
          </Header>
          <Sector />
          <Body>
            <DateBox>
              <DateText>Today</DateText>
              <DateText>{`${year}.${month}.${day}`}</DateText>
            </DateBox>
            <Result>
              <DataBox>
                <LeftSide>
                  <Dot />
                  <LeftText>쓰레기 종류</LeftText>
                </LeftSide>
                <RightText>{myRecord?.data.type}</RightText>
              </DataBox>
              <Sector2 />
              <DataBox>
                <LeftSide>
                  <Dot />
                  <LeftText>정확도</LeftText>
                </LeftSide>
                <AccuracyBar>
                  <Accuracy accuracy={acuuracy} />
                </AccuracyBar>
              </DataBox>
              <Sector2 />
              <DataBox>
                <LeftSide>
                  <Dot />
                  <LeftText>획득 포인트</LeftText>
                </LeftSide>
                <RightText>{`+${addPoint} Point`}</RightText>
              </DataBox>
              <Sector2 />
              <DataBox>
                <LeftSide>
                  <Dot />
                  <LeftText>총 포인트</LeftText>
                </LeftSide>
                <RightText>{`${
                  myRecord!.data.beforePoint + addPoint
                } Point`}</RightText>
              </DataBox>
            </Result>
          </Body>
        </Template>
      </DoneBox>
    </>
  );
};

export default PopUpBox;
