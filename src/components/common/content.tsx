import React from 'react';
import {Content} from '../../styles/globalLayout';

const Body = ({children}: {children: JSX.Element[] | JSX.Element}) => {
  return <Content>{children}</Content>;
};

export default Body;
