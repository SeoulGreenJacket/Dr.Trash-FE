import styled from '@emotion/native';

const Template = styled.View`
  width: 280px;
  height: 400px;

  position: absolute;
  top: 55px;
`;

const Header = styled.View`
  width: 100%;
  height: 63px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 15px;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 0 16px;
`;

const Sector = styled.View`
  width: 100%;
  border: 1px solid #bebebe;
`;

const Body = styled.View`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  margin: 18px 0 0 0;
  padding: 0 18px;
`;

const Date = styled.View`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DateText = styled.Text`
  font-size: 10px;
`;

const Result = styled.View`
  width: 100%;
  height: 240px;
  margin: 0 0 10px 0;
`;

const Sector2 = styled.View`
  width: 100%;
  border: 0.5px solid #bebebe;
`;

const DataBox = styled.View`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.View`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 0 13px 0 0;
  background-color: #5ac400;
`;

const LeftText = styled.Text`
  font-size: 12px;
  color: #5c5c5c;
`;

const RightText = styled.Text`
  font-size: 22px;
  font-weight: 500;
`;

export {
  Template,
  Header,
  Sector,
  Sector2,
  Body,
  HeaderText,
  Date,
  DateText,
  Result,
  DataBox,
  LeftSide,
  Dot,
  LeftText,
  RightText,
};
