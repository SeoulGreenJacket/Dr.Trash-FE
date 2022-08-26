import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import {styles} from '../../App';
import Map from '../../components/trashcan/addMap';
import {SecondaryGlobalLayout} from '../../styles/globalLayout';
import {
  AlertBox,
  HelpText,
  TitleBox,
  Title,
} from '../../styles/main/home/alertBox';
import {
  Btn,
  BtnTxt,
  BtnWrapper,
  Input,
  InputBox,
  Label,
} from '../../styles/trashcan/add';
import RootStackParamList from '../../types/RootStackParamList';

export interface IInputsType {
  code: string;
  name: string;
  number: string;
  location: IMapType;
}

export interface IMapType {
  latitude: number;
  longitude: number;
}

const TextInput = ({
  name,
  inputs,
  setInputs,
}: {
  name: 'code' | 'name' | 'number';
  inputs: IInputsType;
  setInputs: (prev: any) => void;
}) => {
  const [value, setValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [isFocused, setIsFocused] = useState({
    code: false,
    name: false,
    number: false,
  });
  const onChange = (e: any) => {
    setValue(e.nativeEvent.text);
    setInputs({
      ...inputs,
      [name]: e.nativeEvent.text,
    });
  };
  const onChangeNumber = (e: any) => {
    let {text} = e.nativeEvent;
    setNumberValue(text);
    setInputs({
      ...inputs,
      [name]: e.nativeEvent.text,
    });
  };
  return (
    <InputBox>
      <Label>
        {name === 'code'
          ? '쓰레기통 코드'
          : name === 'name'
          ? '쓰레기통 이름'
          : name === 'number'
          ? '관리자 전화번호'
          : '등록 위치'}
      </Label>
      <Input
        onChange={name === 'number' ? onChangeNumber : onChange}
        onFocus={() => {
          setIsFocused({...isFocused, [name]: true});
        }}
        onBlur={() => {
          setIsFocused({...isFocused, [name]: false});
        }}
        isFocused={isFocused[name]}
        value={name === 'number' ? numberValue : value}
        placeholder={
          name === 'code'
            ? '쓰레기통 코드를 입력해주세요.'
            : name === 'name'
            ? '쓰레기통 이름을 입력해주세요.'
            : name === 'number'
            ? "'-' 을 제외한 숫자만 입력해주세요."
            : '등록 위치를 선택해주세요.'
        }
      />
    </InputBox>
  );
};

type NavProps = NativeStackScreenProps<RootStackParamList>;

const TrashCanInfo = ({navigation}: NavProps) => {
  const [inputs, setInputs] = useState({
    code: '',
    name: '',
    number: '',
    location: {
      latitude: 0,
      longitude: 0,
    },
  });
  const {
    code,
    name,
    number,
    location: {latitude, longitude},
  } = inputs;
  const input = [code, name, number, latitude, longitude];
  const onRegister = () => {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === '') {
        Alert.alert('모든 정보를 입력해주세요.');
        return;
      }
    }
    navigation.navigate('TrashCanInfo');
    /**
     * 데이터 전송
     */
    // navigation.push('TrashCanAdd');
  };
  // 양식 체크
  useEffect(() => {
    console.log(inputs);
  }, [inputs]);
  return (
    <>
      <SecondaryGlobalLayout>
        <SafeAreaView style={styles.safeAreaTopMinor} />
        <AlertBox>
          <TitleBox>
            <Title>{`새로운 쓰레기통을${'\n'}등록 해 보세요.`}</Title>
          </TitleBox>
          <HelpText />
        </AlertBox>
        <TextInput name="code" inputs={inputs} setInputs={setInputs} />
        <TextInput name="name" inputs={inputs} setInputs={setInputs} />
        <TextInput name="number" inputs={inputs} setInputs={setInputs} />
        <Label>위치 등록</Label>
        <Map inputs={inputs} setInputs={setInputs} />
        <BtnWrapper>
          <Btn>
            <BtnTxt>홈으로</BtnTxt>
          </Btn>
          <Btn onPress={onRegister}>
            <BtnTxt>등록하기</BtnTxt>
          </Btn>
        </BtnWrapper>
      </SecondaryGlobalLayout>
    </>
  );
};

export default TrashCanInfo;
