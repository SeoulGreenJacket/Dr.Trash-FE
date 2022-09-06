import styled from '@emotion/native';

export const TrashCanPlusBtn = styled.TouchableOpacity`
  width: 41px;
  height: 41px;
  background: ${props => props.theme.colors.lime};
  position: absolute;
  left: 29px;
  bottom: 180px;
  border-radius: 41px;
`;

export const GPSBtn = styled.TouchableOpacity<{isCurLocation: boolean}>`
  width: 41px;
  height: 41px;
  background-color: ${props =>
    props.isCurLocation ? `${props.theme.colors.lime}` : 'white'};
  position: absolute;
  left: 29px;
  bottom: 120px;
  border-radius: 41px;
`;
