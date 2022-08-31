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
  {title: '페트', point: 1000},
  {title: '캔', point: 500},
  {title: '종이', point: 250},
];

const AllBox = () => {
  //   const [maxPoint, setMaxPoint] = useState(0);
  //   useEffect(() => {
  //     const max = trashData.reduce(function (prev, cur) {
  //       return prev.point > cur.point ? prev : cur;
  //     });
  //     setMaxPoint(max.point);
  //   }, []);
  const maxPoint = 1000;
  //   console.log((trashData[0].point / maxPoint) * 100);
  //   console.log((trashData[1].point / maxPoint) * 100);
  //   console.log((trashData[2].point / maxPoint) * 100);

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
