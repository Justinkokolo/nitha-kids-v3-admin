// Libs
import styled from 'styled-components';

// Utils
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: calc(${Spacing.Small} + ${Spacing.XSmall});
  display: flex;
  align-items: center;
  top: ${Spacing.Large};
  cursor: pointer;
  height: ${Spacing.XXLarge};
`;
