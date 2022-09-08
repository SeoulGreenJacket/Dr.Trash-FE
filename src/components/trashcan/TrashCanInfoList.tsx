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

interface ListType {
  name: string;
  code: string;
  index: number;
  onDeleteTrashcan: (i: number) => void;
}

const TrashCanInfoList = ({name, code, index, onDeleteTrashcan}: ListType) => {
  return (
    <TrashCanList>
      <ListText>
        <TrashCanName>{name}</TrashCanName>
        {/* <TrashCanCode>코드명 {code}</TrashCanCode> */}
      </ListText>
      <TouchableOpacity>
        <EditIcon
          name="edit"
          size={30}
          style={{marginTop: 25, marginRight: 20}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDeleteTrashcan(index)}>
        <DelIcon name="close" size={30} style={{marginTop: 25}} />
      </TouchableOpacity>
    </TrashCanList>
  );
};

export default TrashCanInfoList;
