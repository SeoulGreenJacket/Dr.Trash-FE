import React, {useState} from 'react';
import {Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../App';
import useApi from '../../hooks/axios';
import {IInputsType, TextInput} from '../../screens/trashcan/trashcanAdd';
import GlobalLayout from '../../styles/globalLayout';
import {Modal} from '../../styles/main/community/newPage';
import {
  AlertBox,
  HelpText,
  Title,
  TitleBox,
} from '../../styles/main/home/alertBox';
import {Btn, BtnTxt, BtnWrapper, Label} from '../../styles/trashcan/add';
import GhostBox from '../../styles/trashcan/reviseInfo';
import Map from './AddMap';

const ReviseInfoModal = ({
  modal,
  setModal,
  id,
}: {
  modal: boolean;
  setModal: (prev: boolean) => void;
  id: number;
}) => {
  const [inputs, setInputs] = useState<IInputsType>({
    name: '',
    number: '',
    latitude: 0,
    longitude: 0,
  });
  const onRevise = async () => {
    const [name, number, latitude, longitude] = Object.values(inputs);
    const input2 = [name, number, latitude, longitude];
    for (let i = 0; i < input2.length; i++) {
      if (input2[i] === '') {
        Alert.alert('모든 정보를 입력해주세요.');
        return;
      }
      if (latitude === 0 || longitude === 0) {
        Alert.alert('쓰레기통 위치를 선택해주세요.');
        return;
      }
    }
    const {head, body, tail} = {
      head: number.slice(0, 3),
      body: number.slice(3, 7),
      tail: number.slice(7, 11),
    };
    const phone = `${head}-${body}-${tail}`;
    const req = {
      name,
      phone,
      latitude,
      longitude,
    };
    const {status} = await useApi.patch(`trashcans/${id}`, req);
    if (status === 200) {
      Alert.alert('쓰레기통 정보가 수정되었습니다.');
      setModal(false);
    }
  };
  return (
    <Modal visible={modal} animationType="slide">
      <GlobalLayout>
        <SafeAreaView style={styles.safeAreaTop} />
        <GhostBox />
        <AlertBox>
          <TitleBox>
            <Title>{`쓰레기통 정보를${'\n'}수정 해 보세요.`}</Title>
          </TitleBox>
          <HelpText />
        </AlertBox>
        <TextInput name="name" inputs={inputs} setInputs={setInputs} />
        <TextInput name="number" inputs={inputs} setInputs={setInputs} />
        <Label>위치 등록</Label>
        <Map inputs={inputs} setInputs={setInputs} />
        <BtnWrapper>
          <Btn>
            <BtnTxt
              onPress={() => {
                setModal(false);
              }}>
              취소
            </BtnTxt>
          </Btn>
          <Btn onPress={onRevise}>
            <BtnTxt>수정하기</BtnTxt>
          </Btn>
        </BtnWrapper>
      </GlobalLayout>
    </Modal>
  );
};

export default ReviseInfoModal;
