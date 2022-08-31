import styled from '@emotion/native';

const GlobalLayout = styled.View`
  flex: 1;
  padding: 0 30px;
  background-color: ${props => props.theme.colors.white};
`;
const SecondaryGlobalLayout = styled.View`
  flex: 1;
  // padding: 0 23px;
  background-color: #f7f7f7;
`;

export {GlobalLayout, SecondaryGlobalLayout};
