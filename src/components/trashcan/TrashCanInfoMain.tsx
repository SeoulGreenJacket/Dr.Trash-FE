import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {InfoText, ListView} from '../../styles/trashcan/trashcanInfo';
import TrashCanInfoList, {IListType} from './TrashCanInfoList';
import useApi from '../../hooks/axios';

const TrashCanInfoMain = () => {
  const [modal, setModal] = useState(false);
  const [trashCanList, setTrashCanList] = useState<IListType[]>([]);
  const getTrashcanInfo = async () => {
    let idRes: any;
    try {
      idRes = await useApi.get('/users');
    } catch (e) {
      console.error('getId', e);
    }
    try {
      const res = await useApi.get('/trashcans', {
        params: {
          manager: idRes.data.data,
        },
      });
      setTrashCanList(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getTrashcanInfo();
  }, [modal, trashCanList]);

  const len = trashCanList.length;
  const onDeleteTrashcan = async (id: number) => {
    setTrashCanList(
      trashCanList.filter(item => {
        return id !== item.id;
      }),
    );
    try {
      await useApi.delete(`/trashcans/${id}`);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <InfoText>
        총 {len}건의 쓰레기통이{'\n'}등록됐습니다.
      </InfoText>
      <View style={styles.list}>
        <ListView>
          {trashCanList.map(item => (
            <TrashCanInfoList
              key={item.id}
              trashcanInfo={item}
              onDeleteTrashcan={onDeleteTrashcan}
              modal={modal}
              setModal={setModal}
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
