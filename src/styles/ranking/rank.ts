import styled from '@emotion/native';

const RankScrollView = styled.ScrollView`
  width: 100%;
`;

const TopRank = styled.View`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 0 20px 0;
`;

const TopRankText = styled.Text`
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

const TopRankBox = styled.View`
  width: 39%;
  height: 70%;
`;

const TopRankInnerBox = styled.View`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 10px;
  background-color: white;
`;

const TopRankImage = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 42.5px;
  background-color: black;
  margin: 0 0 2px 0;
`;

const TopRankName = styled.Text`
  width: 100%;
  height: 25px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: #3f3f3f;
`;
const TopRankScore = styled.Text`
  width: 100%;
  height: 25px;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

////////////////////////////////////////////////////////////
const SecondaryRank = styled.View`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;

const SecondaryRankBox = styled.View`
  width: 95px;
  height: 100%;
`;

const SecondaryRankInnerBox = styled.View`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
`;

const SecondaryRankImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin: 0 0 2px 0;
  background-color: black;
`;

const SecondaryRankName = styled.Text`
  width: 100%;
  height: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #3f3f3f;
`;

const SecondaryRankScore = styled.Text`
  width: 100%;
  height: 21px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
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
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
`;

const SubRanking = styled.Text`
  width: 35px;
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
  SubRanking,
  SubProfile,
  SubName,
  SubScore,
  MyRank,
  MyRankingBox,
  MyText,
  MyRanking,
  MyName,
  MyScore,
  TopRankBox,
  TopRankText,
  TopRankInnerBox,
  TopRankImage,
  TopRankName,
  TopRankScore,
  SecondaryRank,
  SecondaryRankBox,
  SecondaryRankInnerBox,
  SecondaryRankImage,
  SecondaryRankName,
  SecondaryRankScore,
};
