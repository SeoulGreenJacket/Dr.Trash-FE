import styled from '@emotion/native';

const InputBox = styled.View`
  width: 100%;
  height: 80px;
  margin: 0 0 10px 0;
`;

const Label = styled.Text`
  height: 17px;
  font-size: 17px;
  margin: 0 0 8px 0;
`;

const Input = styled.TextInput<{isFocused: boolean}>`
  width: 100%;
  height: 55px;
  border: 1px solid;
  border-color: ${props =>
    props.isFocused ? props.theme.colors.lime : props.theme.colors.white};
  border-radius: 10px;
  font-size: 17px;
  padding-left: 15px;
  background-color: ${props => props.theme.colors.white};
`;

const MapWrapper = styled.View`
  width: 100%;
  height: 250px;
  position: relative;
  border: 1px solid ${props => props.theme.secondary.middleGray};
  border-radius: 10px;
  overflow: hidden;
`;

const CurLocBtn = styled.TouchableOpacity`
  width: 41px;
  height: 41px;
  background-color: ${props => props.theme.colors.lime};
  position: absolute;
  bottom: 7px;
  right: 7px;
  border-radius: 20.5px;
`;

const Target = styled.TouchableOpacity`
  position: absolute;
  bottom: 46.5%;
  right: 45.8%;
  border-radius: 20.5px;
`;

const BtnWrapper = styled.View`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0 0 0;
`;

const Btn = styled.TouchableOpacity`
  width: 48.5%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.lime};
`;

const BtnTxt = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 20px;
`;

export {
  InputBox,
  Label,
  Input,
  MapWrapper,
  CurLocBtn,
  Target,
  BtnWrapper,
  Btn,
  BtnTxt,
};
