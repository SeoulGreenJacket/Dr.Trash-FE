import styled from '@emotion/native';

const RankScrollView = styled.ScrollView`
  width: 100%;
`;

const TopRank = styled.View`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background-color: ${props => props.theme.colors.lime};
`;

const TopRanking = styled.Text`
  width: 33px;
  margin: 0 0 0 15px;
  font-size: 25px;
`;

const TopProfile = styled.View`
  width: 55px;
  height: 55px;
  margin: 0 0 0 10px;
  border-radius: 27.5px;
  background-color: white;
`;

const TopName = styled.Text`
  font-size: 25px;
  margin: 0 0 0 10px;
`;

const TopScore = styled.Text`
  font-size: 25px;
  position: absolute;
  right: 15px;
`;

////////////////////////////////////////////////////////////

const SubRankBox = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubRank = styled.View`
  width: 320px;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SubRanking = styled.Text`
  width: 29px;
  margin: 0 0 0 10px;
  color: ${props => props.theme.colors.darkGray};
  font-size: 17px;
`;

const SubProfile = styled.View`
  width: 45px;
  height: 45px;
  margin: 0 0 0 10px;
  border-radius: 22.5px;
  background-color: ${props => props.theme.colors.darkGray};
`;

const SubName = styled.Text`
  color: ${props => props.theme.colors.darkGray};
  font-size: 17px;
  margin: 0 0 0 10px;
`;

const SubScore = styled.Text`
  color: ${props => props.theme.colors.darkGray};
  font-size: 17px;
  position: absolute;
  right: 10px;
`;

//////////////////////////////////////////

const MyRank = styled.View`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background-color: black;
`;

const MyRankingBox = styled.View`
  width: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 15px;
`;

const MyText = styled.Text`
  color: white;
  font-size: 17px;
`;
const MyRanking = styled.Text`
  color: white;
  font-size: 25px;
`;

const MyProfile = styled.View`
  width: 55px;
  height: 55px;
  border-radius: 27.5px;
  background-color: white;
`;

const MyName = styled.Text`
  color: white;
  font-size: 25px;
  margin: 0 0 0 10px;
`;

const MyScore = styled.Text`
  color: white;
  font-size: 25px;
  position: absolute;
  right: 15px;
`;

export {
  RankScrollView,
  TopRank,
  SubRankBox,
  SubRank,
  TopRanking,
  TopProfile,
  TopName,
  TopScore,
  SubRanking,
  SubProfile,
  SubName,
  SubScore,
  MyRank,
  MyRankingBox,
  MyText,
  MyRanking,
  MyProfile,
  MyName,
  MyScore,
};
