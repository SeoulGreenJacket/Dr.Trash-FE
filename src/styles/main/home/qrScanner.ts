import styled from '@emotion/native';

const CameraBox = styled.View`
  width: 100%;
  min-height: 330px;
  justify-content: center;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 10px;
  overflow: hidden;
`;

export default CameraBox;
