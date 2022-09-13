import styled from '@emotion/native';

const AlertBox = styled.View`
  width: 100%;
  height: auto;
  margin: 0 0 30px 0;
`;
const TitleBox = styled.Text`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;
const Title = styled.Text`
  color: ${props => props.theme.colors.black};
  font-size: 29px;
  font-weight: 600;
`;
const HelpText = styled.Text`
  width: 100%;
  height: auto;
  //margin-top: 10px;
  color: ${props => props.theme.colors.darkGray};
  font-size: 17px;
`;

export {AlertBox, HelpText, TitleBox, Title};
