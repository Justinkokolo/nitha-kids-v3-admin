// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';
import { Type } from '../../constants/size';
import { FontSize } from '../../constants/fonts';

export const Wrapper = styled.div<{ size: Type, focused: Boolean }>`
  position: relative;
  width: 400px;
  background-color: ${Color.gray};
  height: calc(${Spacing.XLarge} + 12px);
  border-radius: ${Spacing.XSmall};
  border: 1px solid ${props => props.focused ? Color.darkGray : Color.lightBorder};
  box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  -webkit-box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  -moz-box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Input = styled.input`
  padding: 0 ${Spacing.Medium} 0 calc(${Spacing.XLarge} + ${Spacing.Small} + ${Spacing.XSmall});
  outline: none;
  color: ${Color.textDark};
  font-size: ${FontSize.Small} !important;
  width: 100%;
  height: calc(${Spacing.XLarge} + 12px);
  border: none !important;
  background-color: transparent;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: ${Spacing.Medium};
  margin-top: ${Spacing.XSmall};
`;