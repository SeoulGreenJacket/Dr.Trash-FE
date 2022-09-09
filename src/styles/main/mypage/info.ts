import styled from '@emotion/native';

export const MyPageInfoBox = styled.View`
  height: 134px;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin: 0 23px 11px 23px;
`;

export const MyPageInfoText = styled.View``;

export const MyPageInfoProfile = styled.View`
  width: 134px;
  height: 100%;
  border: 1px solid #ededed;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 100px;
  position: absolute;
  right: 0;
`;
export const Grade = styled.Text`
  color: ${props => props.theme.colors.lime};
  font-size: 15px;
  font-weight: 300;
`;
export const Name = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

export const MyPageStatus = styled.View`
  height: 108px;
  background: white;
  border-radius: 15px;
  border: 1px solid #ededed;
  padding: 18px 23px;
  margin: 0 23px 19px 23px;
  flex-direction: row;
`;

export const RankSection = styled.View`
  flex-grow: 1;
`;

export const PointSection = styled.View`
  flex-grow: 1;
`;

export const AccuracySection = styled.View`
  flex-grow: 1;
`;

export const TitleText = styled.Text`
  font-weight: 300;
`;

export const ContentText = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: ${props => props.theme.colors.lime};
`;
