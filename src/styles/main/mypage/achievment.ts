import styled from '@emotion/native';

export const AchievementTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin-left: 23px;
  margin-bottom: 21px;
`;

export const AchievementBox = styled.View`
  padding: 0 23px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

export const AchievementItem = styled.View`
  width: 79px;
  height: 79px;
  border-radius: 79px;
  overflow: hidden;
  background: white;
  justify-content: center;
  align-items: center;
`;

export const ItemImage = styled.Image<{done: boolean}>`
  height: 120px;
  width: 120px;
  opacity: ${props => (props.done ? '1' : '0.2')};
`;

export const BadgeDetail = styled.View`
  margin: 0 23px;
  height: 161px;
  background-color: white;
  border: 2px solid #ededed;
  border-radius: 15px;
  margin-bottom: 22px;
  flex-direction: row;
  padding: 21px 0;
  align-items: center;
`;
export const BadgeImage = styled.Image`
  width: 131px;
  height: 131px;
  overflow: hidden;
  border-radius: 100px;
`;
export const BadgeDescription = styled.View`
  height: 100%;
`;
export const BadgeTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 14px;
`;
export const BadgeContent = styled.Text`
  font-size: 15px;
`;
