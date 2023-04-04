// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div<{ show: Boolean }>`
  position: fixed;
  background-color: ${Color.white};
  padding: ${Spacing.Medium} ${Spacing.Medium};
  border-radius: ${Spacing.XSmall};
  margin-bottom: ${Spacing.Medium};
  z-index: 9999999999 !important;
  left: 40px;
  bottom: 40px;
  width: 330px;
  border: 1px solid ${Color.lightBorder};
  box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  -webkit-box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  -moz-box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  margin-left: -430px;
  transition: margin 150ms ease-in-out;

  ${({ show }) =>
    show &&
    `
    margin-left: 0;
    transition: margin 100ms ease-in-out;
  `}
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SecondInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  top: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const TypeWrapper = styled.div`
  margin-right: ${Spacing.Small};
`;
