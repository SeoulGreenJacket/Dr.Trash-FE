import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  AchievementBox,
  AchievementItem,
  ItemImage,
  AchievementTitle,
  BadgeDetail,
  BadgeImage,
} from '../../../styles/main/mypage/achievment';

const achieveItem = [
  {
    imgUri:
      'https://media.istockphoto.com/vectors/vector-whale-vector-id943449546?k=20&m=943449546&s=612x612&w=0&h=I37aTvCtTXmTC71ITBF9vxNEVHXdiip8Z_SKEv7qP_w=',
    content: 'Dr.Trash 첫 이용!',
    done: true,
  },
  {
    imgUri:
      'https://littledeep.com/wp-content/uploads/2019/04/littledeep_whale_style1.png',
    content: '라벨 없는 PET 버리기 성공',
    done: false,
  },
  {
    imgUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ855B0iIHT9XSM9z2yxpM5f-3QlRU8PfhPGQ&usqp=CAU',
    content: '캔 버리기 성공',
    done: true,
  },
  {
    imgUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4xEcljsh3wQ7Mt9VFX4RN1GNqrdkmsg12A&usqp=CAU',
    content: '종이 버리기 성공',
    done: false,
  },
  {
    imgUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Cn_xl8YTUYBXGCeammIGJUBG0IqOltO9fQ&usqp=CAU',
    content: '음식물 없는 컵라면 용기',
    done: false,
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
                <ItemImage done={item.done} source={{uri: `${item.imgUri}`}} />
              </TouchableOpacity>
            </AchievementItem>
          </View>
        ))}
      </AchievementBox>
      {isBadgeClick && (
        <BadgeDetail>
          <BadgeImage source={{uri: `${badges[0].imgUri}`}} />
        </BadgeDetail>
      )}
    </>
  );
};

export default Achievement;
