import React, {useState} from 'react';
import {Alert, Pressable, Text} from 'react-native';
import {
  StatisticsBox,
  StatisticsType,
  TypeAll,
  TypeDetail,
} from '../../../styles/main/mypage/statistics';

const typeAll = {content: '전체', value: 'all'};
const typeDetail = {
  content: '상세',
  value: 'detail',
};

const Statistics = () => {
  const [type, setType] = useState('all');
  const onPressType = (value: string) => {
    setType(value);
  };
  return (
    <>
      <StatisticsType>
        <TypeAll onPress={() => onPressType(typeAll.value)} typeValue={type}>
          <Text style={{textAlign: 'center'}}>{typeAll.content}</Text>
        </TypeAll>
        <TypeDetail
          onPress={() => onPressType(typeDetail.value)}
          typeValue={type}>
          <Text style={{textAlign: 'center'}}>{typeDetail.content}</Text>
        </TypeDetail>
      </StatisticsType>
      {type === 'all' ? (
        <StatisticsBox>
          <Text>전체</Text>
        </StatisticsBox>
      ) : (
        <StatisticsBox>
          <Text>상세</Text>
        </StatisticsBox>
      )}
    </>
  );
};

export default Statistics;
