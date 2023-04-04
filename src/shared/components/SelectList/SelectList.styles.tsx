// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';
import { FontSize, FontWeight } from '../../constants/fonts';

export const Wrapper = styled.div<{ isPublic: Boolean }>`
  position: absolute;
  top: 100.5%;
  left: 0;
  right: 0;
  max-height: 400px;
  overflow-y: scroll;
  border: 1px solid ${Color.lightBorder};
  border-radius: ${Spacing.XSmall};
  background-color: ${Color.white};
  z-index: 999999 !important;

  ${({ isPublic }) =>
    isPublic &&
    `
    background-color: ${Color.gray};
  `}
`;

export const ListItem = styled.div<{ withBorder: Boolean}>`
  margin: 0;
  border-bottom: 1px solid ${props => props.withBorder === true ? Color.lightBorder : 'transparent'};
  padding: ${Spacing.ExtraSmall} ${Spacing.Medium};
  display: flex;
  align-items: center;
  position: relative;
  z-index: 999999 !important;

  &:hover {
    cursor: pointer;
    background-color: ${Color.lightGray};
  }
`;

export const Title = styled.p<{ isPublic: Boolean }>`
  font-size: ${FontSize.Small} !important;
  font-weight: ${FontWeight.Regular};
  color: ${Color.default};
  margin-bottom: 0 !important;

  ${({ isPublic }) =>
    isPublic &&
    `
    font-size: ${FontSize.Medium} !important;
  `}
`;

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const ListItemWrapperFlag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const IconWrapper = styled.span`
  position: absolute;
  right: calc(${Spacing.Small} + ${Spacing.XSmall});
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: ${Spacing.XXLarge};
`;

export const Image = styled.img`
  position: absolute;
  top: ${Spacing.Small};
  right: calc(${Spacing.XLarge} + ${Spacing.Small});
  width: 40px;
  height: 40px;
  border-radius: ${Spacing.XSmall};
`;

export const Flag = styled.img`
  height: 12px;
`;
