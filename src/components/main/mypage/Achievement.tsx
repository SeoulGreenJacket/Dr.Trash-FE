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
