// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../../constants/colors';
import { Spacing } from '../../../constants/spacing';
import { FontSize } from '../../../constants/fonts';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 48px;
  padding: 24px ${Spacing.Medium} 0 ${Spacing.Medium};
  background-color: ${Color.white};
  z-index: 999;
  height: 100px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Color.gray};
  padding: calc(${Spacing.XSmall} + 2px) ${Spacing.Small};
  border-radius: ${Spacing.XSmall};
  border: 1px solid ${Color.lightBorder};
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: ${FontSize.XSmall};
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  padding-left: 0;
  margin-left: ${Spacing.Small};
  color: ${Color.darkBlue};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
