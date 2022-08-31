import styled from '@emotion/native';

const Section1 = styled.View`
  width: 119%;
  height: 40%;
  background-color: ${props => props.theme.colors.lightGray};
  position: absolute;
  top: 144px;
  padding: 15px;
`;

const MiddleLine = styled.View`
  width: 119%;
  height: 15px;
  position: absolute;
  top: 450px;
  background-color: ${props => props.theme.colors.middleGray};
`;

const Section2 = styled.View`
  width: 119%;
  height: 40%;
  background-color: ${props => props.theme.colors.lightGray};
  position: absolute;
  top: 458px;
  padding: 15px;
`;

const Category = styled.TouchableOpacity<{modal?: boolean}>`
  width: 120px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: ${props =>
    props.modal ? props.theme.colors.lime : props.theme.colors.white};
  padding: 10px 12px;
`;
const CategoryText = styled.Text<{modal?: boolean}>`
  font-size: 17px;
  color: ${props =>
    props.modal ? props.theme.colors.white : props.theme.colors.black};
`;

export {Section1, MiddleLine, Section2, Category, CategoryText};
