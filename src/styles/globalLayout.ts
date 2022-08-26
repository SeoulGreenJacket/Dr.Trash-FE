import styled from '@emotion/native';

const GlobalLayout = styled.View`
  flex: 1;
  padding: 0 15px 0 15px;
  background-color: ${props => props.theme.colors.white};
`;
const SecondaryGlobalLayout = styled.View`
  flex: 1;
  padding: 0 15px 0 15px;
  background-color: ${props => props.theme.secondary.lightGray};
`;

export {GlobalLayout, SecondaryGlobalLayout};
