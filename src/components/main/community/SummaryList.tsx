import React from 'react';
import {MajorList} from '../../../styles/main/community/summaryList';
import List from './List';
import {ICommunityProps} from './Summary';

const SummaryList = ({
  popular,
  time,
}: {
  popular: ICommunityProps[] | null;
  time: ICommunityProps[] | null;
}) => {
  return (
    <MajorList>
      {popular
        ? popular?.slice(0, 3).map(item => {
            return <List key={item.content} item={item} />;
          })
        : time?.slice(0, 3).map(item => {
            return <List key={item.content} item={item} />;
          })}
    </MajorList>
  );
};

export default SummaryList;
