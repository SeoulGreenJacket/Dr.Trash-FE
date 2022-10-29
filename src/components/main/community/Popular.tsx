import React from 'react';
import {Text} from 'react-native';
import {
  ColorBox,
  PopluarBox,
  PopularTypeBox,
  Type,
  PopularList,
  PopularTitle,
  PopularDescription,
  PopularLeft,
  PopularRight,
  PopularViewCount,
} from '../../../styles/main/community/styles';
interface PopularType {
  popList: any;
  getEachArticle: any;
}
const Popular = ({popList, getEachArticle}: PopularType) => {
  return (
    <PopluarBox>
      <PopularTypeBox>
        <ColorBox />
        <Type>인기글</Type>
      </PopularTypeBox>
      {popList.map((item: any) => (
        <PopularList
          key={item.id}
          onPress={() => getEachArticle(item.id, item.authorId)}>
          <PopularLeft>
            <PopularTitle>{item.title}</PopularTitle>
            <PopularDescription>
              {item.content.length > 10
                ? item.content.substr(0, 15).concat('...')
                : item.content}
            </PopularDescription>
          </PopularLeft>
          <PopularRight>
            <PopularViewCount>
              <Text>조회</Text>
              {item.viewCount}
            </PopularViewCount>
          </PopularRight>
        </PopularList>
      ))}
    </PopluarBox>
  );
};

export default Popular;
