import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  DetailHeader,
  StatisticsBox,
  DetailList,
  DateCircle,
  ThrowSummary,
  ThrowType,
  ThrowGetPoint,
  VerticalLine,
  DetailMain,
  NoneListText,
} from '../../../styles/main/mypage/statistics';
import RNPickerSelect from 'react-native-picker-select';
import DownArrowIcon from 'react-native-vector-icons/AntDesign';
import RightArrowIcon from 'react-native-vector-icons/AntDesign';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import Loading from '../../common/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';

const monthArr = [
  {label: '1월', value: 1},
  {label: '2월', value: 2},
  {label: '3월', value: 3},
  {label: '4월', value: 4},
  {label: '5월', value: 5},
  {label: '6월', value: 6},
  {label: '7월', value: 7},
  {label: '8월', value: 8},
  {label: '9월', value: 9},
  {label: '10월', value: 10},
  {label: '11월', value: 11},
  {label: '12월', value: 12},
];

const DetailBox = () => {
  const [loading, setLoading] = useState(false);
  const [month, setMonth] = useState(0);
  const [listMargin, setListMargin] = useState<any>([0]);
  const [detailList, setDetailList] = useState([
    {type: '', success: 0, failure: 0, date: ''},
  ]);
  useEffect(() => {
    setDetailList([]);
  }, []);
  //일 별로 간격 띄우기
  // useEffect(() => {
  // let margin = [0];

  // let date = detailList[0].Date.toString();
  // setTimeout(() => {
  //   console.log(date);
  //   for (let i = 1; i < detailList.length; i++) {
  //     console.log(date);
  //     margin[i] = detailList[i].Date - detailList[i - 1].Date;
  //   }
  // }, 1000);

  // setListMargin(margin);
  //   setLoading(false);
  // }, [detailList]);
  // const date = new Date();
  // console.log(date.toString().slice(8, 10));

  //월 API요청 보내기
  const sendMonth = async (value: number) => {
    setMonth(value);
    const access = await AsyncStorage.getItem('access_token');
    if (value !== null) {
      try {
        const res = await axios.get(
          `${Config.SERVER_HOST}/trash/summary/detail`,
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
            params: {
              year: 2022,
              month: value,
            },
          },
        );
        setDetailList(res.data.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    let margin = [0];
    for (let i = 1; i < detailList.length; i++) {
      margin[i] =
        Number(detailList[i].date.toString().slice(8, 10)) -
        Number(detailList[i - 1].date.toString().slice(8, 10)) +
        1;
    }
    setListMargin(margin);
    setLoading(false);
    console.log(detailList);
    console.log(listMargin);
  }, [detailList]);

  return (
    <StatisticsBox>
      {loading ? (
        <Loading />
      ) : (
        <>
          <DetailHeader style={styles.header}>
            <RNPickerSelect
              onValueChange={value => sendMonth(value)}
              items={monthArr}
              placeholder={{label: '월'}}
            />
            <DownArrowIcon
              name="caretdown"
              style={{marginTop: 3, marginLeft: 10}}
              color={60}
            />
          </DetailHeader>
          {month === 0 || month === null ? (
            <NoneListText>한달 동안의 기록을 조회해보세요!</NoneListText>
          ) : detailList.length === 0 ? (
            <NoneListText>해당 월의 기록이 없습니다.</NoneListText>
          ) : (
            <DetailMain>
              <VerticalLine />
              {detailList.map((item, index) => (
                <DetailList
                  key={index}
                  index={index}
                  listMargin={listMargin[index] * 5}>
                  <DateCircle>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: '700',
                        textAlign: 'center',
                        marginTop: 6,
                      }}>
                      {item.date.toString().slice(8, 10)}
                    </Text>
                  </DateCircle>
                  <ThrowSummary>
                    <ThrowType>
                      <Text
                        style={{
                          color: 'white',
                          textAlign: 'center',
                          fontSize: 12,
                          marginTop: 10,
                          fontWeight: '600',
                        }}>
                        {item.type}
                      </Text>
                    </ThrowType>
                    <PlusIcon name="plus" size={20} style={{marginLeft: 24}} />
                    <ThrowGetPoint>
                      <Text
                        style={{
                          fontSize: 28,
                          fontWeight: '200',
                          marginRight: 22,
                        }}>
                        {item.success * 10}
                      </Text>
                    </ThrowGetPoint>
                    <RightArrowIcon name="right" size={15} />
                  </ThrowSummary>
                </DetailList>
              ))}
            </DetailMain>
          )}
        </>
      )}
    </StatisticsBox>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 2,
    borderBottomColor: '#BEBEBE',
  },
});

export default DetailBox;
