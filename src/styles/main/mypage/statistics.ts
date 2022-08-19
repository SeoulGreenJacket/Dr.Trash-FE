import styled from '@emotion/native';

export const StatisticsBox = styled.View`
  width: 100%;
  min-height: 365px;
  background: #d6d5d5;
  margin-bottom: 34px;
`;
export const StatisticsType = styled.View`
  height: 50px;
  max-width: 200px;
  flex-direction: row;
`;

export const TypeAll = styled.Pressable<{typeValue: string}>`
  padding: 18px 5px 18px 5px;
  flex-grow: 1;
  background-color: ${props =>
    props.typeValue === 'all' ? '#C6E803' : '#ededed'};
`;
export const TypeDetail = styled.Pressable<{typeValue: string}>`
  padding: 18px 5px 18px 5px;
  flex-grow: 1;
  background-color: ${props =>
    props.typeValue === 'detail' ? '#C6E803' : '#ededed'};
`;
