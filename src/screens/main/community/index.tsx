import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../../App';
import GlobalLayout from '../../../styles/globalLayout';
import Alert from '../../../components/main/community/Title';
import Popular from '../../../components/main/community/Popular';
import All from '../../../components/main/community/All';
import useApi from '../../../hooks/axios';
import Loading from '../../../components/common/Loading';
import {RegiBtnBox} from '../../../styles/main/community/styles';
import Icon from 'react-native-vector-icons/Feather';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../types/RootStackParamList';
import EachArticle from '../../../components/main/community/EachArticle';

type NavProps = NativeStackScreenProps<RootStackParamList>;

const Community = ({navigation}: NavProps) => {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  //인기글 가져오기
  const [popList, setPopList] = useState<any | undefined>([]);
  const getPopular = useCallback(async () => {
    try {
      const res = await useApi.get('/articles', {
        params: {
          orderBy: 'viewCount',
          limit: 3,
        },
      });
      setPopList(res.data.data);
      setLoading(false);
    } catch (e) {
      console.error('pop', e);
    }
  }, [popList]);
  //전체글 가져오기
  const [allList, setAllList] = useState<any | undefined>([]);
  const getAll = useCallback(async () => {
    try {
      const res = await useApi.get('/articles', {
        params: {
          orderBy: 'id',
          limit: 3,
        },
      });
      setAllList(res.data.data);
    } catch (e) {
      console.error('all', e);
    }
  }, [allList]);
  useEffect(() => {
    getPopular();
  }, [popList]);

  useEffect(() => {
    getAll();
  }, [allList]);
  //특정글 가져오기
  const [eachArticle, setEachArticle] = useState({
    title: '',
    content: '',
    viewCount: 0,
  });
  const [userName, setUserName] = useState('');
  const getEachArticle = async (id: number, userId: number) => {
    try {
      const res = await useApi.get(`/users/${userId}`);
      setUserName(res.data.data.name);
    } catch (e) {
      console.error('uid', e);
    }
    try {
      const res = await useApi.get(`/articles/${id}`);
      setEachArticle(res.data.data);
      setModalOpen(true);
    } catch (e) {
      console.error('id', e);
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <GlobalLayout>
          <SafeAreaView style={styles.safeAreaTop} />
          <Alert />
          <Popular
            popList={popList}
            getEachArticle={(id: number, uid: number) =>
              getEachArticle(id, uid)
            }
          />
          <All
            allList={allList}
            getEachArticle={(id: number, uid: number) =>
              getEachArticle(id, uid)
            }
          />
          <EachArticle
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            eachArticle={eachArticle}
            userName={userName}
            navigation={navigation}
          />
          <RegiBtnBox
            onPress={() => {
              navigation.push('Register');
            }}>
            <Icon
              name="edit-2"
              size={30}
              style={{marginLeft: '21%', marginTop: '21%'}}
            />
          </RegiBtnBox>
        </GlobalLayout>
      )}
    </>
  );
};

export default Community;
