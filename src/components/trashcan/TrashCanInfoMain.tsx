import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {InfoText, ListView} from '../../styles/trashcan/trashcanInfo';
import TrashCanInfoList from './TrashCanInfoList';

const TrashCanInfoMain = () => {
  const [trashCanList, setTrashCanList] = useState([
    {
      name: '서울과학기술대학교',
      code: '#dk38rn3',
      index: 1,
    },
    {
      name: '청주시 흥덕구 가경동',
      code: '#kk20yy2',
      index: 2,
    },
  ]);
  const len = trashCanList.length;
  const onDeleteTrashcan = (id: number) => {
    setTrashCanList(
      trashCanList.filter(item => {
        return id !== item.index;
      }),
    );
  };
  return (
    <>
      <InfoText>총 2건의 쓰레기통이{'\n'}등록됐습니다.</InfoText>
      <View style={styles.list}>
        <ListView>
          {trashCanList.map(item => (
            <TrashCanInfoList
              key={item.index}
              name={item.name}
              code={item.code}
              index={item.index}
              onDeleteTrashcan={onDeleteTrashcan}
            />
          ))}
        </ListView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  list: {
    minHeight: 500,
  },
});
export default TrashCanInfoMain;
