import styled from '@emotion/native';

export const AllBox = styled.ScrollView`
  height: 200px;
  background-color: white;
`;

export const PopluarBox = styled.View`
  height: 100px;
  margin-bottom: 100px;
`;

export const PopularTypeBox = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ColorBox = styled.View`
  width: 14px;
  height: 14px;
  background-color: ${props => props.theme.colors.limeTp};
`;

export const Type = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin-left: 3px;
`;

export const PopularList = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.limeTp};
  height: 54px;
  padding: 6px;
  flex-direction: row;
`;
export const PopularLeft = styled.View`
  width: 80%;
`;
export const PopularRight = styled.View`
  width: 20%;
`;

export const PopularTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 3px;
`;
export const PopularDescription = styled.Text`
  color: ${props => props.theme.colors.darkGray};
`;

export const PopularViewCount = styled.Text`
  margin: 10px 0 0 8px;
  color: ${props => props.theme.colors.lime};
`;

export const AllList = styled.TouchableOpacity`
  height: 54px;
  padding: 6px;
  flex-direction: row;
`;
export const AllLeft = styled.View`
  width: 80%;
`;
export const AllRight = styled.View`
  width: 20%;
`;

export const AllTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 3px;
`;
export const AllDescription = styled.Text`
  color: ${props => props.theme.colors.darkGray};
`;

export const AllViewCount = styled.Text`
  margin: 10px 0 0 8px;
  color: ${props => props.theme.colors.lime};
`;

export const RegiBtnBox = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  border-radius: 54px;
  background-color: ${props => props.theme.colors.lime};
  position: absolute;
  right: 28px;
  bottom: 27px;
`;

export const RegiBack = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin-bottom: 48px;
`;

export const RegiTitle = styled.TextInput`
  background-color: white;
  width: 100%;
  height: 46px;
  border-radius: 10px;
  padding-left: 23px;
  margin-bottom: 60px;
`;

export const RegiDescription = styled.TextInput`
  background-color: white;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  padding: 23px;
  margin-bottom: 50px;
`;

export const RegiBtn = styled.TouchableOpacity`
  background-color: black;
  width: 135px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const EachTitleBox = styled.View`
  width: 100%;
  height: 100px;
  border-radius: 10px 10px 0 0;
  background-color: white;
  margin-bottom: 20px;
  padding: 15px 17px 0;
`;

export const EachContentBox = styled.View`
  width: 100%;
  height: 400px;
  border-radius: 0 0 10px 10px;
  background-color: white;
  padding: 40px 26px;
`;

export const EachTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const EachSubTitleBox = styled.View`
  flex-direction: row;
`;

export const EachSubTitle = styled.Text`
  color: #9a9a9a;
  font-size: 10px;
  margin-right: 21px;
`;

export const DeleteBox = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  justify-content: flex-end;
  align-items: flex-end;
`;
