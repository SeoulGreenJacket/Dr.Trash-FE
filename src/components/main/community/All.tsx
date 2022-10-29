import React from 'react';
import {
  AllBox,
  AllList,
  AllLeft,
  AllTitle,
  AllDescription,
  AllRight,
  AllViewCount,
} from '../../../styles/main/community/styles';
import {Text} from 'react-native';
interface AllType {
  allList: any;
  getEachArticle: any;
}

const All = ({allList, getEachArticle}: AllType) => {
  return (
    <AllBox>
      {allList.map((item: any) => (
        <AllList
          key={item.id}
          onPress={() => getEachArticle(item.id, item.authorId)}>
          <AllLeft>
            <AllTitle>{item.title}</AllTitle>
            <AllDescription>
              {item.content.length > 10
                ? item.content.substr(0, 15).concat('...')
                : item.content}
            </AllDescription>
          </AllLeft>
          <AllRight>
            <AllViewCount>
              <Text>조회</Text>
              {item.viewCount}
            </AllViewCount>
          </AllRight>
        </AllList>
      ))}
    </AllBox>
  );
};

export default All;
