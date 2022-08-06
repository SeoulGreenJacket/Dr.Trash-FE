import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

const Header = styled.View`
  flex: 0.12;
  background-color: #c0e3ca;
`;

const Content = styled.View`
  flex: 1;
  /* align-items: center; */
  flex-direction: column;
`;

const NavBar = styled.View`
  flex: 0.1;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export {Container, Header, Content, NavBar};
