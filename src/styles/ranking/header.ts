import styled from '@emotion/native';

const RankHeader = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;
`;

const Title = styled.Text`
  color: black;
  font-size: 30px;
  font-weight: 600;
`;

const Reloader = styled.View<{reload: boolean}>``;

export {RankHeader, Title, Reloader};
