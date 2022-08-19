import React from 'react';
import {Text} from 'react-native';
import {DoneBox} from '../../../styles/main/home/MidBox';

const PopUpBox = ({myRecord}: {myRecord: any}) => {
  return (
    <DoneBox>
      <Text>배출 완료</Text>
    </DoneBox>
  );
};

export default PopUpBox;
