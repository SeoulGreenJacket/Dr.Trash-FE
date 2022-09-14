import React from 'react';
import {
  FaqHeader,
  Faq1,
  Faq2,
  Faq3,
  Faq1Image,
  Faq1Text,
  Faq2Image,
  Faq2Text,
  Faq3Image,
  Faq3Text,
} from '../../styles/faq/FaqStyle';
let faq1 = require('../../../assets/faq/pet_label.jpeg');
let faq2 = require('../../../assets/faq/food_waste.jpeg');
let faq3 = require('../../../assets/faq/plastic_bag.jpeg');

const FaqMain = () => {
  return (
    <>
      <FaqHeader>자주묻는질문</FaqHeader>
      <Faq1>
        <Faq1Image source={faq1}></Faq1Image>
        <Faq1Text>페트병은 라벨을 떼고 버리세요.</Faq1Text>
      </Faq1>
      <Faq2>
        <Faq2Image source={faq2}></Faq2Image>
        <Faq2Text>
          음식물이 묻은 쓰레기는 종류에 상관없이 {'\n'}일반쓰레기 입니다.
        </Faq2Text>
      </Faq2>
      <Faq3>
        <Faq3Image source={faq3}></Faq3Image>
        <Faq3Text>뽁뽁이는 비닐 쓰레기입니다.</Faq3Text>
      </Faq3>
    </>
  );
};

export default FaqMain;
