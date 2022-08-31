import styled from '@emotion/native';

const Modal = styled.Modal`
  width: 100%;
  height: 100%;
`;

const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  background-color: ${props => props.theme.colors.lightGray};
`;

const ListBox = styled.View`
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  margin: 25px 0 0 0;
  background-color: ${props => props.theme.colors.white};
`;

const PageBox = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumberBox = styled.View`
  width: 120px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-radius: 10px;
  background-color: #b4b4b4;
`;

const Page = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.colors.middleGray};
`;

export {Modal, ModalContainer, ListBox, PageBox, NumberBox, Page};
