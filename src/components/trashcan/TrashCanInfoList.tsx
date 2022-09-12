import React from 'react';
import {TouchableOpacity} from 'react-native';
import EditIcon from 'react-native-vector-icons/AntDesign';
import DelIcon from 'react-native-vector-icons/AntDesign';
import {
  TrashCanList,
  ListText,
  TrashCanName,
  TrashCanCode,
} from '../../styles/trashcan/trashcanInfo';
import ReviseInfoModal from './ReviseInfo';

export interface IListType {
  id: number;
  name: string;
  phoneNumber: string;
  latitude: number;
  longitude: number;
}

const TrashCanInfoList = ({
  trashcanInfo: {id, name, phoneNumber: phone, latitude, longitude},
  onDeleteTrashcan,
  modal,
  setModal,
}: {
  trashcanInfo: IListType;
  onDeleteTrashcan: (i: number) => void;
  modal: boolean;
  setModal: (prev: boolean) => void;
}) => {
  const input = {
    id,
    name,
    phoneNumber: phone,
    latitude,
    longitude,
  };
  return (
    <TrashCanList>
      <ReviseInfoModal modal={modal} setModal={setModal} id={input.id} />
      <ListText>
        <TrashCanName>{name}</TrashCanName>
        {/* <TrashCanCode>코드명 {code}</TrashCanCode> */}
      </ListText>
      <TouchableOpacity
        onPress={() => {
          setModal(true);
        }}>
        <EditIcon
          name="edit"
          size={30}
          style={{marginTop: 25, marginRight: 20}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDeleteTrashcan(id)}>
        <DelIcon name="close" size={30} style={{marginTop: 25}} />
      </TouchableOpacity>
    </TrashCanList>
  );
};

export default TrashCanInfoList;
