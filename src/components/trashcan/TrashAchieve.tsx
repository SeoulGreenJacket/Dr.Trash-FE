import React, {useState} from 'react';
import {Modal} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../App';
import {
  AchievementModal,
  AchievementModalImage,
  AchievementModalImageBox,
  AchieveText,
  BagdeName,
  Description,
  OkButton,
  OkButtonText,
} from '../../styles/main/home/achievment';

interface IAchievementType {
  id: number;
  name: string;
  description: string;
  imageUri: string;
}

const TrashAchieveModal = ({
  achievement,
  navigation,
}: {
  achievement?: IAchievementType;
  navigation: any;
}) => {
  const [name, setName] = useState('');
  console.log(achievement);
  return (
    <Modal
      animated={true}
      animationType="fade"
      visible={name !== achievement?.name}>
      <AchievementModal>
        <SafeAreaView style={styles.safeAreaTop} />
        <AchievementModalImageBox>
          <AchieveText>새로운 업적 달성!</AchieveText>
          <AchievementModalImage source={{uri: achievement?.imageUri}} />
          <Description>{achievement?.description}</Description>
          <BagdeName>
            {achievement?.name}
            {'  '}뱃지
          </BagdeName>
          <OkButton
            onPress={() => {
              setName(achievement?.name || '');
              navigation.goBack();
            }}>
            <OkButtonText>확인</OkButtonText>
          </OkButton>
        </AchievementModalImageBox>
      </AchievementModal>
    </Modal>
  );
};

export default TrashAchieveModal;
