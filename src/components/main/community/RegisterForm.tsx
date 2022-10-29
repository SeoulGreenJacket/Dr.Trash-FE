import React, {useEffect, useState} from 'react';
import {Alert, Text} from 'react-native';
import {
  RegiDescription,
  RegiTitle,
  RegiBtn,
} from '../../../styles/main/community/styles';
import useApi from '../../../hooks/axios';
import {CommonActions} from '@react-navigation/native';

interface RegiType {
  navigation: any;
}
const RegisterForm = ({navigation}: RegiType) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const onPressRegi = async () => {
    let body = {
      title: title,
      content: description,
    };
    if (title === '' || description === '') {
      Alert.alert('모든 폼 입력을 완료해주세요.');
      return;
    }
    try {
      await useApi.post(`/articles`, body);
      Alert.alert('글 등록 성공');
      navigation.navigate('Community');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <RegiTitle
        placeholder="제목을 입력하세요"
        onChangeText={setTitle}
        value={title}
      />
      <RegiDescription
        placeholder="본문을 입력하세요"
        onChangeText={setDescription}
        value={description}
        multiline
      />
      <RegiBtn onPress={onPressRegi}>
        <Text style={{color: 'white'}}>등록하기</Text>
      </RegiBtn>
    </>
  );
};

export default RegisterForm;
