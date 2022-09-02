import styled from '@emotion/native';

const MidBox = styled.View`
  width: 100%;
  min-height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 35px;
  overflow: hidden;
  margin: 0 0 30px 0;
`;

const Camera = styled.TouchableOpacity`
  width: 100%;
  height: 330px;
`;

const BeforeBox = styled.ImageBackground`
  width: 100%;
  height: 330px;
`;

const InProgressBox = styled.View`
  width: 100%;
  height: 330px;
  background-color: ${props => props.theme.colors.lightGray};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingBox = styled.Image`
  width: 100%;
  height: 100%;
`;

const DoneBox = styled.View`
  width: 100%;
  min-height: 465px;
  background-color: ${props => props.theme.colors.lightGray};
  color: white;
  display: flex;
  align-items: center;
  position: relative;
`;

const DoneBoxImage = styled.Image`
  width: 100%;
  position: absolute;
  top: 0;
`;

export {
  MidBox,
  Camera,
  BeforeBox,
  InProgressBox,
  DoneBox,
  LoadingBox,
  DoneBoxImage,
};
