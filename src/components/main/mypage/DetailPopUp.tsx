import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../../App';
import GlobalLayout from '../../../styles/globalLayout';
import Icon from 'react-native-vector-icons/AntDesign';
import {RegiBack} from '../../../styles/main/community/styles';
import PopUpBox from '../home/PopUp';

interface DetailPopUpType {
  setIsModal: any;
  detailPopUpData: any;
}

const DetailPopUp = ({setIsModal, detailPopUpData}: DetailPopUpType) => {
  return (
    <GlobalLayout>
      <SafeAreaView style={styles.safeAreaTop} />
      <RegiBack onPress={() => setIsModal(false)}>
        <Icon name="left" size={30} />
      </RegiBack>
      <PopUpBox myRecord={detailPopUpData} />
    </GlobalLayout>
  );
};

export default DetailPopUp;
