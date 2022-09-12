import React, {useState} from 'react';
import {
  StatisticsType,
  TypeAll,
  TypeDetail,
  StatisticsTitle,
  StatisticsInfoBox,
  AllText,
  DetailText,
} from '../../../styles/main/mypage/statistics';
import AllBox from './AllBox';
import DetailBox from './DetailBox';

const typeAll = {content: '전체', value: 'all'};
const typeDetail = {
  content: '상세',
  value: 'detail',
};

const Statistics = ({trashDataAll, totalSuccess}: any) => {
  const [type, setType] = useState('all');
  const onPressType = (value: string) => {
    setType(value);
  };
  return (
    <>
      <StatisticsInfoBox>
        <StatisticsTitle>나의 분리수거 통계</StatisticsTitle>
        <StatisticsType>
          <TypeAll onPress={() => onPressType(typeAll.value)} typeValue={type}>
            <AllText
              style={{textAlign: 'center', fontSize: 13}}
              typeValue={type}>
              {typeAll.content}
            </AllText>
          </TypeAll>
          <TypeDetail
            onPress={() => onPressType(typeDetail.value)}
            typeValue={type}>
            <DetailText
              style={{textAlign: 'center', fontSize: 13}}
              typeValue={type}>
              {typeDetail.content}
            </DetailText>
          </TypeDetail>
        </StatisticsType>
      </StatisticsInfoBox>
      {type === 'all' ? (
        <AllBox trashDataAll={trashDataAll} totalSuccess={totalSuccess} />
      ) : (
        <DetailBox />
      )}
    </>
  );
};

export default Statistics;
