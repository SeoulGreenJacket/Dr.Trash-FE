import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../../App';
import RegisterForm from '../../../components/main/community/RegisterForm';
import GlobalLayout from '../../../styles/globalLayout';
import {RegiBack} from '../../../styles/main/community/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../types/RootStackParamList';
import {CommonActions} from '@react-navigation/native';

export type NavProps = NativeStackScreenProps<RootStackParamList>;

const Register = ({navigation}: NavProps) => {
  return (
    <GlobalLayout>
      <SafeAreaView style={styles.safeAreaTop} />
      <RegiBack
        onPress={() => {
          navigation.dispatch(CommonActions.navigate('Community'));
        }}>
        <Icon name="left" size={30} />
      </RegiBack>
      <RegisterForm navigation={navigation} />
    </GlobalLayout>
  );
};

export default Register;
