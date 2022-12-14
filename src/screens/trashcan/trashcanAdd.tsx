import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import {styles} from '../../App';
import Loading from '../../components/common/Loading';
import TrashAchieveModal from '../../components/trashcan/TrashAchieve';
import Map from '../../components/trashcan/AddMap';
import useApi from '../../hooks/axios';
import GlobalLayout from '../../styles/globalLayout';
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
  code?: string;
  name: string;
  number: string;
  type?: string;
  latitude: number;
  longitude: number;
}

export const TextInput = ({
  name,
  inputs,
  setInputs,
}: {
  placeholder?: string;
  name: 'code' | 'name' | 'number' | 'type';
  inputs: IInputsType;
  setInputs: (prev: any) => void;
}) => {
  const [value, setValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [isFocused, setIsFocused] = useState({
    code: false,
    name: false,
    number: false,
    type: false,
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
          : name === 'type'
          ? '쓰레기통 타입'
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
    type: '',
    latitude: 0,
    longitude: 0,
  });
  const {code, name, number, latitude, longitude, type} = inputs;
  const input = [code, name, number, latitude, longitude, type];
  const [achive, setAchive] = useState<any>([]);
  const onRegister = async () => {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === '') {
        Alert.alert('모든 정보를 입력해주세요.');
        return;
      }
      if (latitude === 0 || longitude === 0) {
        Alert.alert('쓰레기통 위치를 선택해주세요.');
        return;
      }
    }
    const {head, body, tail} = {
      head: number.slice(0, 3),
      body: number.slice(3, 7),
      tail: number.slice(7, 11),
    };
    const phone = `${head}-${body}-${tail}`;
    const req = {
      code,
      name,
      type,
      phone,
      latitude,
      longitude,
    };
    const res = await useApi.post('/trashcans', req);
    if (res.status === 201) {
      Alert.alert('쓰레기통 등록이 완료되었습니다.');
      // setAchive(res.data.achievement);
      // setLoading(false);
      navigation.navigate('TrashCanInfo');
    } else {
      Alert.alert('다시 한번 시도해주세요.');
    }
  };
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   console.log(inputs);
  // });
  return (
    <>
      {/* {achive?.map((item: any) => ( */}
      {/* {loading ? null : (
        <TrashAchieveModal
          key={achive[0]?.id}
          achievement={achive[0]}
          navigation={navigation}
        />
      )} */}

      <GlobalLayout>
        <SafeAreaView style={styles.safeAreaTop} />
        <AlertBox>
          <TitleBox>
            <Title>{`새로운 쓰레기통을${'\n'}등록 해 보세요.`}</Title>
          </TitleBox>
          <HelpText />
        </AlertBox>
        <TextInput name="code" inputs={inputs} setInputs={setInputs} />
        <TextInput name="name" inputs={inputs} setInputs={setInputs} />
        <TextInput name="number" inputs={inputs} setInputs={setInputs} />
        <TextInput name="type" inputs={inputs} setInputs={setInputs} />
        <Label>위치 등록</Label>
        <Map inputs={inputs} setInputs={setInputs} />
        <BtnWrapper>
          <Btn
            onPress={() => {
              navigation.push('Main');
            }}>
            <BtnTxt>홈으로</BtnTxt>
          </Btn>
          <Btn onPress={onRegister}>
            <BtnTxt>등록하기</BtnTxt>
          </Btn>
        </BtnWrapper>
      </GlobalLayout>
    </>
  );
};

export default TrashCanInfo;
