import styled from '@emotion/native';

export const AchivementBox = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  margin-bottom: 34px;
`;

export const AchivementItem = styled.View`
  width: 80px;
  height: 80px;
  border: 1px solid lightblue;
  margin-right: 10px;
`;
export const ItemImage = styled.Image<{done: boolean}>`
  width: 100%;
  height: 100%;
  opacity: ${props => (props.done ? '1' : '0.2')};
`;
