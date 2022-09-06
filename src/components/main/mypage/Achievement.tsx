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
let earthBadge = require('../../../../assets/badges/earthBadge.png');
let rankBadge = require('../../../../assets/badges/rankBadge.png');
let trashcanBadge = require('../../../../assets/badges/trashcanBadge.png');
let warningBadge = require('../../../../assets/badges/warningBadge.png');
let smileBadge = require('../../../../assets/badges/smileBadge.png');

const achieveItem = [
  {
    imgUri: earthBadge,
    title: '지구지키미',
    content: 'Dr.Trash 첫 이용!',
    done: true,
  },
  {
    imgUri: rankBadge,
    title: 'Dr.Trash 랭커',
    content: '랭킹 3등 이상 달성!',
    done: true,
  },
  {
    imgUri: warningBadge,
    title: '실수 맞죠..?',
    content: '못 버림 포인트 1000점 달성!',
    done: true,
  },
  {
    imgUri: smileBadge,
    title: '분리수거 달인',
    content: '포인트 1000점 이상 달성!',
    done: true,
  },
  {
    imgUri: trashcanBadge,
    title: 'Dr.Trash 아버지',
    content: '쓰레기통 등록 5회 달성!',
    done: true,
  },
];

const Achievement = () => {
  const [isBadgeClick, setIsBadgeClick] = useState(false);
  const [badges, setBadges] = useState<any>();

  useEffect(() => {
    setIsBadgeClick(false);
  }, []);
  const onPressBadge = (content: any) => {
    setBadges(
      achieveItem.filter(item => {
        return item.content === content;
      }),
    );
    setIsBadgeClick(true);
  };

  return (
    <>
      <AchievementTitle>나의 뱃지함</AchievementTitle>
      <AchievementBox style={{marginHorizontal: -11, marginVertical: -11}}>
        {achieveItem.map((item, index) => (
          <View key={index}>
            <AchievementItem
              style={{marginHorizontal: 5.5, marginVertical: 5.5}}>
              <TouchableOpacity onPress={() => onPressBadge(item.content)}>
                <ItemImage done={item.done} source={item.imgUri} />
              </TouchableOpacity>
            </AchievementItem>
          </View>
        ))}
      </AchievementBox>
      {isBadgeClick && (
        <BadgeDetail>
          <BadgeImage source={badges[0].imgUri} />
          <BadgeDescription>
            <BadgeTitle>{badges[0].title}</BadgeTitle>
            <BadgeContent>{badges[0].content}</BadgeContent>
          </BadgeDescription>
        </BadgeDetail>
      )}
    </>
  );
};

export default Achievement;
