import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  AchievementBox,
  AchievementItem,
  ItemImage,
  AchievementTitle,
  BadgeDetail,
  BadgeImage,
  BadgeDescription,
  BadgeTitle,
  BadgeContent,
} from '../../../styles/main/mypage/achievment';
import Loading from '../../common/Loading';
let earthBadge = require('../../../../assets/badges/earthBadge.png');
let rankBadge = require('../../../../assets/badges/rankBadge.png');
let trashcanBadge = require('../../../../assets/badges/trashcanBadge.png');
let warningBadge = require('../../../../assets/badges/warningBadge.png');
let smileBadge = require('../../../../assets/badges/smileBadge.png');

// const achieveItem = [
//   {
//     imgUri: earthBadge,
//     title: '지구지키미',
//     content: 'Dr.Trash 첫 이용!',
//     done: true,
//   },
//   {
//     imgUri: rankBadge,
//     title: 'Dr.Trash 랭커',
//     content: '랭킹 3등 이상 달성!',
//     done: true,
//   },
//   {
//     imgUri: warningBadge,
//     title: '실수 맞죠..?',
//     content: '못 버림 포인트 1000점 달성!',
//     done: true,
//   },
//   {
//     imgUri: smileBadge,
//     title: '분리수거 달인',
//     content: '포인트 1000점 이상 달성!',
//     done: true,
//   },
//   {
//     imgUri: trashcanBadge,
//     title: 'Dr.Trash 아버지',
//     content: '쓰레기통 등록 5회 달성!',
//     done: true,
//   },
// ];

interface BadgeProps {
  achievement: any;
}

const Achievement = ({achievement}: any) => {
  const [isBadgeClick, setIsBadgeClick] = useState(false);
  const [loading, setLoading] = useState(true);
  const [badges, setBadges] = useState([
    {id: 0, name: '', description: '', achievedAt: '', imageUri: ''},
  ]);
  const [eachBadges, setEachBadges] = useState<any>();
  useEffect(() => {
    setIsBadgeClick(false);
    setBadges(achievement);
    setLoading(false);
  }, []);
  const onPressBadge = (content: any) => {
    setEachBadges(
      badges.filter(item => {
        return item.description === content;
      }),
    );
    setIsBadgeClick(true);
    setLoading(false);
  };
  return (
    <>
      <AchievementTitle>나의 뱃지함</AchievementTitle>
      <AchievementBox style={{marginHorizontal: -11, marginVertical: -11}}>
        {badges.map(item => (
          <View key={item.id}>
            <AchievementItem
              style={{marginHorizontal: 5.5, marginVertical: 5.5}}>
              <TouchableOpacity onPress={() => onPressBadge(item.description)}>
                {loading ? (
                  <Loading />
                ) : (
                  <ItemImage
                    done={item.achievedAt}
                    source={{uri: item.imageUri}}
                  />
                )}
              </TouchableOpacity>
            </AchievementItem>
          </View>
        ))}
      </AchievementBox>
      {isBadgeClick && (
        <BadgeDetail>
          <BadgeImage source={{uri: eachBadges[0].imageUri}} />
          <BadgeDescription>
            <BadgeTitle>{eachBadges[0].name}</BadgeTitle>
            <BadgeContent>{eachBadges[0].description}</BadgeContent>
          </BadgeDescription>
        </BadgeDetail>
      )}
    </>
  );
};

export default Achievement;
