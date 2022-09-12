import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {
  StatisticsBox,
  CanStatic,
  PetStatic,
  PaperStatic,
  PlasticStatic,
  TrashItem,
  PointInfo,
  PointBar,
  PointFillBar,
} from '../../../styles/main/mypage/statistics';

const AllBox = ({trashDataAll, totalSuccess}: any) => {
  return (
    <StatisticsBox>
      <CanStatic>
        <PointInfo>
          <Text style={{fontSize: 10, fontWeight: '200'}}>캔</Text>
          <Text style={{fontSize: 20, fontWeight: '400'}}>
            {trashDataAll.can.success * 10}
          </Text>
        </PointInfo>
        <PointBar>
          <PointFillBar
            totalSuccess={totalSuccess}
            success={trashDataAll.can.success}
          />
        </PointBar>
      </CanStatic>
      <PetStatic>
        <PointInfo>
          <Text style={{fontSize: 10, fontWeight: '200'}}>페트</Text>
          <Text style={{fontSize: 20, fontWeight: '400'}}>
            {trashDataAll.pet.success * 10}
          </Text>
        </PointInfo>
        <PointBar>
          <PointFillBar
            totalSuccess={totalSuccess}
            success={trashDataAll.pet.success}
          />
        </PointBar>
      </PetStatic>
      <PaperStatic>
        <PointInfo>
          <Text style={{fontSize: 10, fontWeight: '200'}}>종이</Text>
          <Text style={{fontSize: 20, fontWeight: '400'}}>
            {trashDataAll.paper.success * 10}
          </Text>
        </PointInfo>
        <PointBar>
          <PointFillBar
            totalSuccess={totalSuccess}
            success={trashDataAll.paper.success}
          />
        </PointBar>
      </PaperStatic>
      <PlasticStatic>
        <PointInfo>
          <Text style={{fontSize: 10, fontWeight: '200'}}>플라스틱</Text>
          <Text style={{fontSize: 20, fontWeight: '400'}}>
            {trashDataAll.plastic.success * 10}
          </Text>
        </PointInfo>
        <PointBar>
          <PointFillBar
            totalSuccess={totalSuccess}
            success={trashDataAll.plastic.success}
          />
        </PointBar>
      </PlasticStatic>
    </StatisticsBox>
  );
};

export default AllBox;
