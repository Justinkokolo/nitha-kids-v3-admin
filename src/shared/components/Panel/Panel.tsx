// Libs
import { h } from 'preact';
import React from 'react';

// Components
import { Wrapper } from './Panel.styles';
import { Type } from '../../constants/size';

interface IProps {
  children: React.ReactNode,
  size?: Type
}

const Panel = ({ children, size = Type.Small } : IProps) => {
  return (
    <Wrapper size={size}>
      {children}
    </Wrapper>
  );
};

export default Panel;
