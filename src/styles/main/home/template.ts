import styled from '@emotion/native';

const Template = styled.View`
  width: 280px;
  height: 400px;

  position: absolute;
  top: 55px;
`;

const Header = styled.View`
  width: 100%;
  height: 63px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Sector = styled.View`
  width: 100%;
  border: 1px solid #bebebe;
`;

const Body = styled.View`
  width: 100%;
  height: 300px;
  margin: 18px 0 0 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

export {Template, Header, Sector, Body};
