import React from 'react';
import {DoneBox, DoneBoxImage} from '../../../styles/main/home/MidBox';
import {
  Body,
  Header,
  Sector,
  Template,
} from '../../../styles/main/home/template';

const template = require('../../../../assets/drtrash/main_done_template.png');

const PopUpBox = ({myRecord}: {myRecord: any}) => {
  return (
    <DoneBox>
      <DoneBoxImage source={template} />
      <Template>
        <Header />
        <Sector />
        <Body />
      </Template>
    </DoneBox>
  );
};

export default PopUpBox;
