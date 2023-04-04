// Libs
import { h } from 'preact';
import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

// Components
import { Wrapper, Content } from './Modal.styles';

interface IProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ show = false, onClose, children }: IProps) => {
  return (
    <Wrapper show={show}>
      <OutsideClickHandler onOutsideClick={onClose}>
        <Content>
          {children}
        </Content>
      </OutsideClickHandler>
    </Wrapper>
  );
};

export default Modal;
