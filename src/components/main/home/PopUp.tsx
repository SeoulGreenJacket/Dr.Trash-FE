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
import {IPopupTypes} from '../../../screens/main/home';

const template = require('../../../../assets/drtrash/main_done_template.png');

const PopUpBox = ({myRecord}: {myRecord: IPopupTypes}) => {
  const year = myRecord.date.getFullYear().toString().padStart(2, '0');
  const month = (myRecord.date.getMonth() + 1).toString().padStart(2, '0');
  const day = myRecord.date.getDate().toString().padStart(2, '0');
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
            <DateText>{`${year}.${month}.${day}`}</DateText>
          </Date>
          <Result>
            <DataBox>
              <LeftSide>
                <Dot />
                <LeftText>쓰레기 종류</LeftText>
              </LeftSide>
              <RightText>{myRecord.type}</RightText>
            </DataBox>
            <Sector2 />
            <DataBox>
              <LeftSide>
                <Dot />
                <LeftText>정확도</LeftText>
              </LeftSide>
              <RightText>{`${myRecord.count.success}/${
                myRecord.count.success + myRecord.count.fail
              }`}</RightText>
            </DataBox>
            <Sector2 />
            <DataBox>
              <LeftSide>
                <Dot />
                <LeftText>획득 포인트</LeftText>
              </LeftSide>
              <RightText>{`+${myRecord.point} Point`}</RightText>
            </DataBox>
            <Sector2 />
            <DataBox>
              <LeftSide>
                <Dot />
                <LeftText>총 포인트</LeftText>
              </LeftSide>
              <RightText>{`${myRecord.totalPoint} Point`}</RightText>
            </DataBox>
          </Result>
        </Body>
      </Template>
    </DoneBox>
  );
};

export default PopUpBox;
