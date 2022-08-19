import styled from '@emotion/native';

const MidBox = styled.View`
  width: 100%;
  min-height: 330px;
  justify-content: center;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 10px;
  overflow: hidden;
`;

const InProgressBox = styled.View`
  width: 100%;
  height: 330px;
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DoneBox = styled.View`
  width: 100%;
  height: 330px;
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {MidBox, InProgressBox, DoneBox};
