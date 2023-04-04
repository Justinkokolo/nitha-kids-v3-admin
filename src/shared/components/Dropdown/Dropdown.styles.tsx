// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';
import { Type } from '../../constants/size';

export const Wrapper = styled.div<{ size: Type, withMargin: Boolean }>`
  position: relative;
  border: 1px solid ${Color.lightBorder};
  border-radius: ${Spacing.XSmall};
  cursor: pointer;
  height: ${Spacing.XXLarge};
  display: flex;
  align-items: center;
  width: 168px;
  background-color: ${Color.white} !important;
  margin-left: ${props => props.withMargin ? Spacing.Medium : 0};
  box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  -webkit-box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  -moz-box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  /* z-index: 999 !important; */

  ${({ size }) => size === Type.Small && `
    height: calc(${Spacing.XLarge} + ${Spacing.Small});
  `}
`;

export const InnerWrapper = styled.div`
  padding: 0 ${Spacing.Medium};
  background-color: transparent;
  width: 100%;
  height: ${Spacing.XXLarge};
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: ${Spacing.Small};
  height: 100%;
  display: flex;
  align-items: center;
  top: 0;
  border-left: 1px solid ${Color.lightBorder};
  padding-left: ${Spacing.Small};
`;
