import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  Grade,
  MyPageInfoBox,
  MyPageInfoProfile,
  MyPageInfoText,
  MyPageStatus,
  Name,
  TitleText,
  ContentText,
  RankSection,
  PointSection,
  AccuracySection,
} from '../../../styles/main/mypage/info';
import Icon from 'react-native-vector-icons/AntDesign';
import AccuracyIcon from 'react-native-vector-icons/AntDesign';

interface UserType {
  user: {
    achievement?: string[];
    id?: number;
    name: string;
    point: number;
    rank: number;
    thumbnail: string;
    userGrade: string;
  };
  navigation: any;
  totalSuccess: number;
  totalFailure: number;
}

const Info = ({user, navigation, totalSuccess, totalFailure}: UserType) => {
  const toRankPage = () => {
    navigation.navigate('Ranking');
  };
  return (
    <>
      <MyPageInfoBox>
        <MyPageInfoText>
          <Grade>{user.userGrade}</Grade>
          <Name>
            실천하는
            {'\n'}
            {user.name}님
          </Name>
        </MyPageInfoText>
        <MyPageInfoProfile>
          <Image
            source={{uri: user.thumbnail}}
            style={{width: '100%', height: '100%', borderRadius: 100}}
          />
        </MyPageInfoProfile>
      </MyPageInfoBox>
      <MyPageStatus>
        <RankSection>
          <TouchableOpacity onPress={toRankPage} style={{height: '100%'}}>
            <TitleText style={{flexGrow: 1}}>
              랭킹 <Icon name="pluscircle" />
            </TitleText>
            <ContentText style={{flexGrow: 1}}>{user.rank}등</ContentText>
          </TouchableOpacity>
        </RankSection>
        <PointSection>
          <TitleText style={{flexGrow: 1}}>포인트</TitleText>
          <ContentText style={{flexGrow: 1}}>{user.point}p</ContentText>
        </PointSection>
        <AccuracySection>
          <TitleText style={{flexGrow: 1}}>정확도</TitleText>
          <ContentText style={{flexGrow: 1}}>
            {totalSuccess + totalFailure === 0 ? (
              <AccuracyIcon name="minus" size={30} />
            ) : (
              `${((totalSuccess / (totalSuccess + totalFailure)) * 100).toFixed(
                0,
              )}%`
            )}
          </ContentText>
        </AccuracySection>
      </MyPageStatus>
    </>
  );
};

export default Info;
