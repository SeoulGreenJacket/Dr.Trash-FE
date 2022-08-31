import React from 'react';
import {SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../../../App';
import {Category, CategoryText} from '../../../styles/main/community';
import {
  ListBox,
  Modal,
  ModalContainer,
  NumberBox,
  Page,
  PageBox,
} from '../../../styles/main/community/newPage';
import List from './List';
import {ICommunityProps} from './Summary';

const NewPage = ({
  modal,
  setModal,
  modalData,
  category,
}: {
  modal: boolean;
  setModal: (prev: boolean) => void;
  modalData: ICommunityProps[] | undefined;
  category: '인기 글' | '전체 글';
}) => {
  return (
    <Modal animationType="slide" visible={modal}>
      <ModalContainer>
        <SafeAreaView style={styles.safeAreaTop} />
        <Category
          onPress={() => {
            setModal(false);
          }}
          modal={modal}>
          <CategoryText modal={modal}>{category}</CategoryText>
          <Icon
            name="arrow-forward-ios"
            size={17}
            color={modal ? 'white' : 'black'}
          />
        </Category>
        <ListBox>
          {modalData?.slice(0, 8).map(item => {
            return <List item={item} />;
          })}
          <PageBox>
            <NumberBox>
              <Page>1</Page>
              <Page>2</Page>
              <Page>3</Page>
              <Page>4</Page>
              <Page>5</Page>
              <Icon name="arrow-forward-ios" size={15} color="#EDEDED" />
              {/* 나중에 컴포넌트로 만들어서 기능추가! */}
            </NumberBox>
          </PageBox>
        </ListBox>
      </ModalContainer>
    </Modal>
  );
};

export default NewPage;
