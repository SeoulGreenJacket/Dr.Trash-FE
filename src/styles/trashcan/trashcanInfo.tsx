import styled from '@emotion/native';

export const ListView = styled.View`
  border-radius: 15px;
  overflow: hidden;
`;

export const InfoText = styled.Text`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const TrashCanList = styled.View`
  width: 100%;
  height: 83.5px;
  background: white;
  flex-direction: row;
  padding: 0 13px;
  overflow: hidden;
`;

export const ListText = styled.View`
  justify-content: center;
  flex-grow: 1;
`;
export const TrashCanName = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;
`;
export const TrashCanCode = styled.Text`
  font-size: 13px;
  color: ${props => props.theme.colors.lime};
`;
export const RegisterBtn = styled.TouchableOpacity`
  background: black;
  width: 135px;
  height: 49px;
  border-radius: 15px;
  align-self: center;
`;
