// Libs
import { h, Fragment } from 'preact';
import React from 'react';

// Components
import SideBar from '../SideBar';
import Navigation from '../Navigation';
import { Content, Wrapper } from './Page.styles';

interface IProps {
  children: React.ReactNode
}

const Page = ({ children } : IProps) => {
  return (
    <Fragment>
      <Wrapper>
        <SideBar />
        <Content>
          <Navigation />
          {children}
        </Content>
      </Wrapper>
    </Fragment>
  );
};

export default Page;
