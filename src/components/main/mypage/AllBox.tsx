import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {
  StatisticsBox,
  TrashItem,
  PointInfo,
  PointBar,
  PointFillBar,
} from '../../../styles/main/mypage/statistics';

const trashData = [
  {title: '캔', point: 500},
  {title: '페트', point: 1000},
  {title: '종이', point: 250},
  {title: '플라스틱', point: 750},
];

const AllBox = () => {
  const [maxPoint, setMaxPoint] = useState(0);
  useEffect(() => {
    const max = trashData.reduce(function (prev, cur) {
      return prev.point > cur.point ? prev : cur;
    });
    setMaxPoint(max.point);
  }, []);

  return (
    <StatisticsBox>
      {trashData.map((item, index) => (
        <TrashItem key={index}>
          <PointInfo>
            <Text style={{fontSize: 10, fontWeight: '200'}}>{item.title}</Text>
            <Text style={{fontSize: 20, fontWeight: '400'}}>{item.point}</Text>
          </PointInfo>
          <PointBar>
            <PointFillBar maxPoint={maxPoint} point={item.point} />
          </PointBar>
        </TrashItem>
      ))}
    </StatisticsBox>
  );
};

export default AllBox;
