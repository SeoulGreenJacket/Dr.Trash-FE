import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {
  AchivementBox,
  AchivementItem,
  ItemImage,
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
  const [openAchieveModal, setOpenAchieveModal] = useState(false);
  console.log(openAchieveModal);
  const toggleModal = () => {
    setOpenAchieveModal(!openAchieveModal);
  };
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <AchivementBox>
        {achieveItem.map(item => (
          <>
            <AchivementItem>
              <TouchableOpacity onPress={toggleModal}>
                <ItemImage done={item.done} source={{uri: `${item.imgUri}`}} />
              </TouchableOpacity>
            </AchivementItem>
          </>
        ))}
      </AchivementBox>
    </ScrollView>
  );
};

export default Achievement;
