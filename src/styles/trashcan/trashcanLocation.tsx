import styled from '@emotion/native';

export const TrashCanPlusBtn = styled.TouchableOpacity`
  width: 41px;
  height: 41px;
  background: ${props => props.theme.colors.lime};
  position: absolute;
  left: 29px;
  bottom: 133px;
  border-radius: 41px;
`;

export const GPSBtn = styled.TouchableOpacity<{isCurLocation: boolean}>`
  width: 41px;
  height: 41px;
  background-color: ${props => (props.isCurLocation ? '#c6e803' : 'white')};
  position: absolute;
  left: 29px;
  bottom: 82px;
  border-radius: 41px;
`;
