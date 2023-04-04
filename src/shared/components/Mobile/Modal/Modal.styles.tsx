// Libs
import styled from 'styled-components';

// Utils

export const Wrapper = styled.div<{ show: Boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999999;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 100vh;

  transition: all 100ms ease-in-out;

  ${({ show }) =>
    show &&
    `
    top: 0;
    transition: all 100ms ease-in-out;
  `}
`;

export const Content = styled.div`
  padding: 16px;
  background-color: white;
  width: 100%;
`;
