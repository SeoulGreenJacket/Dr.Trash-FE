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
} from '../../../styles/main/mypage/statistics';
import RNPickerSelect from 'react-native-picker-select';
import DownArrowIcon from 'react-native-vector-icons/AntDesign';
import RightArrowIcon from 'react-native-vector-icons/AntDesign';
import PlusIcon from 'react-native-vector-icons/AntDesign';

const Loading = () => {
  return <Text>Loading...</Text>;
};

const monthArr = [
  {label: '1월', value: '1'},
  {label: '2월', value: '2'},
  {label: '3월', value: '3'},
  {label: '4월', value: '4'},
  {label: '5월', value: '5'},
  {label: '6월', value: '6'},
  {label: '7월', value: '7'},
  {label: '8월', value: '8'},
  {label: '9월', value: '9'},
  {label: '10월', value: '10'},
  {label: '11월', value: '11'},
  {label: '12월', value: '12'},
];
const DetailBox = () => {
  const [loading, setLoading] = useState(true);

  const [month, setMonth] = useState(0);
  const [listMargin, setListMargin] = useState<any>([0]);
  const [detailList, setDetailList] = useState([
    {type: '페트', getPoint: 730, date: 8},
    {type: '캔', getPoint: 240, date: 10},
    {type: '종이', getPoint: 300, date: 16},
    {type: '종이', getPoint: 300, date: 30},
  ]);
  useEffect(() => {
    let margin = [0];
    for (let i = 1; i < detailList.length; i++) {
      margin[i] = detailList[i].date - detailList[i - 1].date;
    }
    setListMargin(margin);
    setLoading(false);
  }, []);
  console.log(listMargin, loading);
  return (
    <StatisticsBox>
      {loading ? (
        <Loading />
      ) : (
        <>
          <DetailHeader style={styles.header}>
            <RNPickerSelect
              onValueChange={value => setMonth(value)}
              items={monthArr}
              placeholder={{label: '월'}}
            />
            <DownArrowIcon
              name="caretdown"
              style={{marginTop: 3, marginLeft: 10}}
              color={60}
            />
          </DetailHeader>
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
                    {item.date}
                  </Text>
                </DateCircle>
                <ThrowSummary>
                  <ThrowType>
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 12,
                        marginTop: 12,
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
                      {item.getPoint}
                    </Text>
                  </ThrowGetPoint>
                  <RightArrowIcon name="right" size={15} />
                </ThrowSummary>
              </DetailList>
            ))}
          </DetailMain>
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
