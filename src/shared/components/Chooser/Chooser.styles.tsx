// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div<{ withFilter: Boolean }>`
  width: 220px;
  position: relative;
  height: 42px;
  border: none;
  border-radius: ${Spacing.XSmall};
  margin-bottom: ${Spacing.Large};
  background-color: ${Color.gray};
  border: 1px solid ${Color.lightBorder};

  ${({ withFilter }) =>
    withFilter &&
    `
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${Color.lightBorder};
    border-radius: 0;
  `}
`;

export const IconWrapper = styled.div<{ withFilter: Boolean }>`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;

  ${({ withFilter }) =>
    withFilter &&
    `
    right: 0;
  `}
`;

export const InnerWrapper = styled.div<{ withFilter: Boolean }>`
  width: 100%;
  position: relative;
  height: 100%;
  border: none;
  border-radius: ${Spacing.XSmall};
  padding: 0 14px;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ withFilter }) =>
    withFilter &&
    `
    padding: 0;
  `}
`;

export const FilterWrapper = styled.div`
  margin-right: ${Spacing.Small};
`;