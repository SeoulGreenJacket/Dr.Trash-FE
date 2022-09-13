import styled from '@emotion/native';

const AchievementModal = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const AchieveText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin: 0 0 30px 0;
`;

const AchievementModalImageBox = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
`;

const AchievementModalImage = styled.Image`
  width: 300px;
  height: 300px;
`;

const BagdeName = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0 0 0;
`;

const Description = styled.Text`
  font-size: 15px;
  margin: 10px 0 0 0;
`;

const OkButton = styled.TouchableOpacity`
  width: 40%;
  height: 50px;
  background-color: ${props => props.theme.colors.lime};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

const OkButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;

export {
  AchievementModal,
  AchievementModalImageBox,
  AchievementModalImage,
  AchieveText,
  BagdeName,
  Description,
  OkButton,
  OkButtonText,
};
