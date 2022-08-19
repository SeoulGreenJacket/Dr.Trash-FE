import styled from '@emotion/native';

export const MyPageInfoBox = styled.View`
  width: 100%;
  height: 134px;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-bottom: 11px;
`;

export const MyPageInfoText = styled.View``;

export const MyPageInfoProfile = styled.View`
  width: 134px;
  height: 100%;
  border: 1px solid black;
  border-radius: 100px;
  position: absolute;
  right: 0;
`;
export const Grade = styled.Text`
  color: ${props => props.theme.colors.lime};
  font-size: 15px;
`;
export const Name = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const MyPageStatus = styled.View`
  width: 100%;
  height: 108px;
  background: ${props => props.theme.colors.lime};
  border-radius: 15px;
  padding: 18px 23px;
  margin-bottom: 34px;
`;
export const StatusTitle = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;
export const StatusContent = styled.View`
  flex-direction: row;
`;
