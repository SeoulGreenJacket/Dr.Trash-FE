import styled from '@emotion/native';

const BtnWrapper = styled.View<{phase: 'before' | 'inProgress' | 'done'}>`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.phase === 'before' ? 'space-between' : 'center'};
  align-items: center;
`;

const Btn = styled.TouchableOpacity`
  width: 49%;
  height: 100%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  padding: 15px;
  position: relative;
`;

const BtnTxt = styled.Text`
  font-size: 17px;
  font-weight: 600;
`;

const IconBox = styled.View`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50px;
  right: 15px;
`;

const Icon = styled.Image`
  width: 110%;
  height: 130%;
`;

const BackBtn = styled.Pressable`
  width: 140px;
  height: 50px;
  background-color: ${props => props.theme.colors.black};
  border-radius: 10px;
  margin: 0 0 90px 0;
  color: ${props => props.theme.colors.white};
`;

const BackBtnTxt = styled.Text`
  margin: auto;
  font-size: 17px;
  color: ${props => props.theme.colors.white};
`;

export {BtnWrapper, Btn, BtnTxt, IconBox, BackBtn, BackBtnTxt, Icon};
