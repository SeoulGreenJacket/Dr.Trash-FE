import React, {useEffect, useState} from 'react';
import {Modal, ScrollView, StyleSheet, Text} from 'react-native';
import {
  DetailHeader,
  StatisticsBox,
  DetailList,
  DateCircle,
  ThrowSummary,
  ThrowType,
  ThrowGetPoint,
  VerticalLine,
  NoneListText,
} from '../../../styles/main/mypage/statistics';
import RNPickerSelect from 'react-native-picker-select';
import DownArrowIcon from 'react-native-vector-icons/AntDesign';
import RightArrowIcon from 'react-native-vector-icons/AntDesign';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import Loading from '../../common/Loading';
import useApi from '../../../hooks/axios';
import DetailPopUp from './DetailPopUp';

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
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState(0);
  const [listMargin, setListMargin] = useState<any>([0]);
  const [detailList, setDetailList] = useState([
    {type: '', success: 0, failure: 0, date: ''},
  ]);
  useEffect(() => {
    setDetailList([]);
  }, []);

  //월 API요청 보내기
  const sendMonth = async (value: number) => {
    setMonth(value);
    if (value !== null) {
      try {
        const res = await useApi.get('/trash/log', {
          params: {
            from: new Date(2022, value - 1, 1).toISOString(),
            to: new Date(2022, value, 1).toISOString(),
          },
        });

        let sorted = res.data.data.sort(function (a: any, b: any) {
          if (a.date > b.date) return 1;
          if (a.date === b.date) return 0;
          if (a.date < b.date) return -1;
        });
        console.log(sorted);
        setDetailList(sorted);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
  };
  //일 별로 간격 띄우기
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
  }, [detailList]);

  //모달 띄우기
  const [isModal, setIsModal] = useState(false);
  const [detailPopUpData, setDetailPopUpData] = useState<any>();
  const onClickDetail = (item: any) => {
    console.log(item);
    let data = {data: item};
    console.log(data);
    setIsModal(true);
    setDetailPopUpData(data);
  };
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
            <ScrollView>
              <VerticalLine />
              <Modal animationType="slide" visible={isModal}>
                <DetailPopUp
                  setIsModal={setIsModal}
                  detailPopUpData={detailPopUpData}
                />
              </Modal>
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
                  <ThrowSummary onPress={() => onClickDetail(item)}>
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
            </ScrollView>
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
