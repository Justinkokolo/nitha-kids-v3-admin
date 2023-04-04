// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: calc(${Spacing.XXXLarge} + ${Spacing.Small});
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Color.lightBorder};
  padding: ${Spacing.Medium} ${Spacing.Large};
`;

export const RightWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const AuthWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Color.lightBorder};
  padding-right: calc(${Spacing.Small} + ${Spacing.XSmall});
  border-radius: ${Spacing.XSmall};
  margin-left: ${Spacing.Medium};
  height: calc(${Spacing.Large} + 2px);
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const IconWrapper = styled.div`
  margin-right: calc(${Spacing.Small} + ${Spacing.XSmall});
  background-color: ${Color.lightBlue};
  padding: ${Spacing.XSmall};
  height: calc(${Spacing.Large} + 2px);
  border-radius: ${Spacing.XSmall};
`;

export const DefaultIconWrapper = styled.div`
  background-color: ${Color.lightBlue};
  padding: ${Spacing.XSmall} ${Spacing.Small};
  height: calc(${Spacing.Large} + 2px);
  border-radius: ${Spacing.XSmall};
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: ${Spacing.Medium};

  &:hover {
    opacity: 0.9;
  }
`;
