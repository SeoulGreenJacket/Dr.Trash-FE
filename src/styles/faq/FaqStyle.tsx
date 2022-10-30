import styled from '@emotion/native';

const FaqScroller = styled.ScrollView`
  flex: 1;
  background-color: #f7f7f7;
  padding: 24px;
`;

const FaqHeader = styled.Text`
  font-size: 30px;
  font-weight: 600;
  margin: 70px 0 30px 0;
`;

const FaqContainer = styled.View`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const ContainerTop = styled.View`
  width: 100%;
  height: 38px;
`;

const ContentContainer = styled.View`
  width: 100%;
  border-top-width: 2px;
  border-top-color: #5ac300;
  padding: 20px 0 0 0;
`;

const ContentTitle = styled.Text`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ContentInnerContainer = styled.View`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  background-color: #f7f7f7;
`;

const InnerTitle = styled.Text`
  font-size: 14px;
  color: #848484;
  margin-bottom: 20px;
`;

const InnerContent = styled.View`
  width: 100%;
  margin-bottom: 30px;
`;

const InnerCategory = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const InnerImage = styled.Image`
  width: 100%;
`;

export {
  FaqHeader,
  FaqContainer,
  FaqScroller,
  ContainerTop,
  ContentContainer,
  ContentTitle,
  InnerContent,
  ContentInnerContainer,
  InnerTitle,
  InnerCategory,
  InnerImage,
};
