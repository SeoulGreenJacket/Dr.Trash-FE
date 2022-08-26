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
  len: number;
}

const TrashCanInfoList = ({name, code, index, len}: ListType) => {
  return (
    <TrashCanList index={index} len={len}>
      <ListText>
        <TrashCanName>{name}</TrashCanName>
        <TrashCanCode>{code}</TrashCanCode>
      </ListText>
      <TouchableOpacity>
        <EditIcon
          name="edit"
          size={30}
          style={{marginTop: 25, marginRight: 20}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <DelIcon name="close" size={30} style={{marginTop: 25}} />
      </TouchableOpacity>
    </TrashCanList>
  );
};

export default TrashCanInfoList;
