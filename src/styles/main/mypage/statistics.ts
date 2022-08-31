import styled from '@emotion/native';

export const StatisticsInfoBox = styled.View`
  flex-direction: row;
  position: relative;
  margin-bottom: 25px;
`;

export const StatisticsTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin-left: 23px;
`;

export const StatisticsBox = styled.View`
  min-height: 365px;
  margin: 0 23px;
  background: white;
  border: 1px solid #ededed;
  padding: 30px 27px;
  margin-bottom: 55px;
  border-radius: 15px;
`;
export const StatisticsType = styled.View`
  height: 30px;
  width: 98px;
  flex-direction: row;
  position: absolute;
  right: 23px;
`;

export const TypeAll = styled.Pressable<{typeValue: string}>`
  flex-grow: 1;
  background-color: ${props =>
    props.typeValue === 'all' ? '#5AC400' : '#f7f7f7'};
  border-radius: 15px;
`;
export const AllText = styled.Text<{typeValue: string}>`
  color: ${props => (props.typeValue === 'all' ? 'white' : 'black')};
  text-align: center;
  font-size: 13px;
  margin-top: 8.5px;
`;

export const TypeDetail = styled.Pressable<{typeValue: string}>`
  flex-grow: 1;
  background-color: ${props =>
    props.typeValue === 'detail' ? '#5AC400' : '#f7f7f7'};
  border-radius: 15px;
`;
export const DetailText = styled.Text<{typeValue: string}>`
  color: ${props => (props.typeValue === 'detail' ? 'white' : 'black')};
  text-align: center;
  font-size: 13px;
  margin-top: 8.5px;
`;

export const TrashItem = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const PointInfo = styled.View`
  width: 65px;
  height: 53px;
  padding: 11px 0 0 11px;
  border-radius: 15px;
  margin-right: 11px;
  background-color: ${props => props.theme.colors.limeTp};
`;

export const PointBar = styled.View`
  height: 19px;
  width: 200px;
  background: #ededed;
  border-radius: 4px;
`;

export const PointFillBar = styled.View<{maxPoint: number; point: number}>`
  width: ${props => `${(props.point / props.maxPoint) * 100}`}%;
  height: 100%;
  background: ${props => props.theme.colors.lime};
  border-radius: 4px;
`;
