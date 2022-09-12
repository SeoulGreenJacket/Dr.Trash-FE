import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {InfoText, ListView} from '../../styles/trashcan/trashcanInfo';
import TrashCanInfoList from './TrashCanInfoList';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const TrashCanInfoMain = () => {
  const [trashCanList, setTrashCanList] = useState([
    {id: 0, name: '', code: ''},
  ]);

  const getTrashcanInfo = async () => {
    const access = await AsyncStorage.getItem('access_token');
    let idRes: any;
    try {
      idRes = await axios.get(`${Config.SERVER_HOST}/users`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
    } catch (e) {
      console.error('getId', e);
    }
    try {
      const res = await axios.get(`${Config.SERVER_HOST}/trashcans`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
        params: {
          user: idRes.data,
        },
      });
      setTrashCanList(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getTrashcanInfo();
  }, []);

  const len = trashCanList.length;
  const onDeleteTrashcan = async (id: number) => {
    setTrashCanList(
      trashCanList.filter(item => {
        return id !== item.id;
      }),
    );
    const access = await AsyncStorage.getItem('access_token');
    try {
      await axios.delete(`${Config.SERVER_HOST}/trashcans/${id}`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
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
              name={item.name}
              code={item.code}
              index={item.id}
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
