import styled from '@emotion/native';

const MajorList = styled.View`
  width: 100%;
  height: 208px;
  border-radius: 10px;
  overflow: hidden;
  margin: 25px 0 0 0;
`;

const ListBox = styled.TouchableOpacity`
  width: 100%;
  height: 69.3px;
  padding: 12px;
  background-color: ${props => props.theme.colors.white};
`;

const Top = styled.View`
  width: 100%;
  height: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  width: 289px;
  height: 100%;
  font-size: 15px;
`;

const CommentBadge = styled.View`
  width: 26px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  background-color: #c0e99e;
`;

const CommentBadgeText = styled.Text`
  font-size: 15px;
`;

///////////////////////////////

const Bottom = styled.View`
  width: 50%;
  height: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NickName = styled.Text`
  font-size: 11px;
  color: #707070;
`;

const ViewCount = styled.Text`
  font-size: 11px;
  color: #707070;
`;

const Time = styled.Text`
  font-size: 11px;
  color: #707070;
`;

export {
  MajorList,
  ListBox,
  Top,
  Bottom,
  Title,
  CommentBadge,
  CommentBadgeText,
  NickName,
  ViewCount,
  Time,
};
