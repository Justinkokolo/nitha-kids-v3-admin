// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../../constants/colors';
import { Spacing } from '../../../constants/spacing';

export const Wrapper = styled.div`
  position: fixed;
  background-color: ${Color.darkestBlue};
  height: 48px;
  padding: 0 ${Spacing.Medium};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid ${Color.lightBorder};
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
`;

export const LeftContentWrapper = styled.div`
  position: relative;
`;

export const MenuIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-left: -2px;
`;

export const IconWrapper = styled.div`
  height: ${Spacing.Large};
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const UserWrapper = styled.div`
  margin-right: ${Spacing.ExtraSmall};
`;

export const MenuRightIconsWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-right: -2px;
`;
