// Libs
import styled from 'styled-components';

// Utils
// import { Color } from '../../constants/colors';
// import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  position: relative;
`;

export const InnerWrapper = styled.div<{ show: Boolean }>`
  position: fixed;
  left: 0;
  width: 0;
  top: 0;
  bottom: 0;
  z-index: 99999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.4);

  ${({ show }) =>
    show &&
    `
    width: 100vw;
  `}
`;

export const LeftWrapper = styled.div<{ show: Boolean }>`
  width: 1124px;
  height: 100vh;
  margin-left: -1124px;
  background-color: white;
  z-index: 2;
  opacity: 0;
  transition: all 130ms ease-in-out;
  overflow: hidden;

  ${({ show }) =>
    show &&
    `
    margin-left: 0;
    opacity: 1;
    transition: all 130ms ease-in-out;
  `}
`;

export const OverlayWrapper = styled.div`
  width: 100vw;
  position: relative;
  padding-top: 20vh;
`;

export const IconWrapper = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const ArticlesWrapper = styled.div`
  width: 408px;
  height: 100vh;
  overflow-y: scroll;
  padding: 48px;
  position: absolute;
  right: calc(100vw - 1124px);
  top: 0;
`;
