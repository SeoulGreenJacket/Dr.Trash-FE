import React from 'react';
import {
  Bottom,
  CommentBadge,
  CommentBadgeText,
  ListBox,
  NickName,
  Time,
  Title,
  Top,
  ViewCount,
} from '../../../styles/main/community/summaryList';
import {ICommunityProps} from './Summary';

const List = ({item}: {item: ICommunityProps}) => {
  const month = String(item.date.getMonth()).padStart(2, '0');
  const day = String(item.date.getDate()).padStart(2, '0');
  const hour = String(item.date.getHours()).padStart(2, '0');
  const minute = String(item.date.getMinutes()).padStart(2, '0');
  return (
    <ListBox>
      <Top>
        <Title>{item.title}</Title>
        <CommentBadge>
          <CommentBadgeText>{item.comments.length}</CommentBadgeText>
        </CommentBadge>
      </Top>
      <Bottom>
        <NickName>{item.nickname}</NickName>
        <ViewCount>조회수 {item.views}</ViewCount>
        <Time>{`${month}.${day} ${hour}:${minute}`}</Time>
      </Bottom>
    </ListBox>
  );
};

export default List;
