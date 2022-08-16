import styled from '@emotion/native';

const BtnWrapper = styled.View<{phase: 'before' | 'inProgress' | 'done'}>`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.phase === 'before' ? 'space-between' : 'center'};
  align-items: center;
  margin-top: 20px;
`;

const Btn = styled.View`
  width: 49%;
  height: 100%;
  background-color: ${props => props.theme.colors.lime};
  border-radius: 10px;
`;

const BackBtn = styled.Pressable`
  width: 140px;
  height: 50px;
  background-color: ${props => props.theme.colors.black};
  border-radius: 10px;
  color: ${props => props.theme.colors.white};
`;

const BackBtnTxt = styled.Text`
  margin: auto;
  font-size: 17px;
  color: ${props => props.theme.colors.white};
`;

export {BtnWrapper, Btn, BackBtn, BackBtnTxt};
