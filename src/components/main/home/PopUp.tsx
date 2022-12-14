import React from 'react';
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
  console.log(myRecord?.achievement);
  return (
    <>
      {myRecord?.achievement === undefined
        ? null
        : myRecord?.achievement.map(achievement => (
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
