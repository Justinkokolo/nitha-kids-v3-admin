// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';
import { FontSize, FontWeight } from '../../constants/fonts';

export const Wrapper = styled.div`
  position: relative;
  max-width: 168px;
  display: flex;
  justify-content: flex-end;
`;

export const IconWrapper = styled.div`
  width: ${Spacing.XLarge};
  height: ${Spacing.Large};
  background-color: ${Color.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Color.border};
  border-radius: ${Spacing.XSmall};

  &:hover {
    cursor: pointer;
    background-color: ${Color.gray};
  }
`;

export const List = styled.div`
  position: absolute;
  top: 105%;
  right: 0;
  width: 168px;
  border: 1px solid ${Color.border};
  border-radius: ${Spacing.XSmall};
  background-color: ${Color.white};
  z-index: 9999999;
`;

export const ListItem = styled.p<{ withBorder: Boolean}>`
  font-size: ${FontSize.XSmall} !important;
  font-weight: ${FontWeight.Regular};
  color: ${Color.default};
  margin: 0;
  border-bottom: 1px solid ${props => props.withBorder === true ? Color.border : 'transparent'};
  padding: 0 ${Spacing.Medium};
  height: ${Spacing.XLarge};
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    cursor: pointer;
    background-color: ${Color.gray};
  }
`;

