import {Alert, Modal, SafeAreaView, Text} from 'react-native';
import React from 'react';
import GlobalLayout from '../../../styles/globalLayout';
import {styles} from '../../../App';
import {
  EachContentBox,
  EachTitleBox,
  RegiBack,
  EachTitle,
  EachSubTitleBox,
  EachSubTitle,
  DeleteBox,
} from '../../../styles/main/community/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import DIcon from 'react-native-vector-icons/AntDesign';
import useApi from '../../../hooks/axios';

interface ModalType {
  modalOpen: boolean;
  setModalOpen: any;
  eachArticle: any;
  userName: string;
  navigation: any;
}

const EachArticle = ({
  modalOpen,
  setModalOpen,
  eachArticle,
  userName,
  navigation,
}: ModalType) => {
  const deleteArticle = async () => {
    try {
      await useApi.delete(`/articles/${eachArticle.id}`);
      Alert.alert('글이 삭제되었습니다.');
      setModalOpen(false);
    } catch (e) {
      Alert.alert('해당 글의 삭제 권한이 없습니다.');
      // console.error(e);
    }
  };
  return (
    <Modal animationType="slide" visible={modalOpen}>
      <GlobalLayout>
        <SafeAreaView style={styles.safeAreaTop} />
        <RegiBack onPress={() => setModalOpen(false)}>
          <Icon name="left" size={30} />
        </RegiBack>
        <EachTitleBox>
          <EachTitle>{eachArticle.title}</EachTitle>
          <EachSubTitleBox>
            <EachSubTitle>{userName}</EachSubTitle>
            <EachSubTitle>조회수 {eachArticle.viewCount}</EachSubTitle>
          </EachSubTitleBox>
        </EachTitleBox>
        <EachContentBox>
          <Text>{eachArticle.content}</Text>
        </EachContentBox>
        <DeleteBox onPress={deleteArticle}>
          <DIcon name="delete" size={30} />
        </DeleteBox>
      </GlobalLayout>
    </Modal>
  );
};

export default EachArticle;
