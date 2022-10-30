import React from 'react';
import {Text} from 'react-native';
import {
  ContainerTop,
  ContentContainer,
  ContentInnerContainer,
  ContentTitle,
  FaqContainer,
  FaqHeader,
  FaqScroller,
  InnerCategory,
  InnerContent,
  InnerImage,
  InnerTitle,
} from '../styles/faq/FaqStyle';
let faq1 = require('../../assets/faq/pet_label.jpeg');
let faq2 = require('../../assets/faq/food_waste.jpeg');
let faq3 = require('../../assets/faq/plastic_bag.jpeg');

const Faq = () => {
  return (
    <FaqScroller scrollEventThrottle={400} showsVerticalScrollIndicator={false}>
      <FaqHeader>자주묻는질문</FaqHeader>
      <FaqContainer>
        <ContainerTop>
          <Text style={{color: '#848484', fontSize: 14}}>
            회원분들이 자주 묻는 질문을 확인해보세요
          </Text>
        </ContainerTop>
        <ContentContainer>
          <ContentTitle>쓰레기 분리구분이 궁금해요.</ContentTitle>
          <ContentInnerContainer>
            <InnerTitle>
              분리수거 잘하고 싶지만 어렵다구요?{'\n'}헷갈리기 쉬운 쓰레기
              분리법!{'\n'}하나씩 차근차근 알려드릴게요.
            </InnerTitle>
            <InnerContent>
              <InnerCategory>
                1. 페트병은 라벨을 제거 후 버려주세요.
              </InnerCategory>
              <InnerImage source={faq1} />
            </InnerContent>
            <InnerContent>
              <InnerCategory>
                2. 음식물이 묻은 쓰레기는 종류 상관없이 일반 쓰레기입니다.
              </InnerCategory>
              <InnerImage source={faq2} />
            </InnerContent>
            <InnerContent>
              <InnerCategory>3. 뽁뽁이는 비닐에 버려주세요.</InnerCategory>
              <InnerImage source={faq3} />
            </InnerContent>
          </ContentInnerContainer>
        </ContentContainer>
      </FaqContainer>
    </FaqScroller>
  );
};

export default Faq;
