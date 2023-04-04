// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../../constants/colors';
import { Spacing } from '../../../constants/spacing';

export const Wrapper = styled.div<{ isActive: Boolean }>`
  position: relative;
  height: ${Spacing.XXLarge};
  background-color: ${props => props.isActive ? Color.blue : Color.lightDarkBlue};
  padding: 0 ${Spacing.Medium};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${Color.darkBlue};

  &:hover {
    cursor: pointer;
    background-color: ${Color.blue};
  }
`;

export const IconWrapper = styled.div`
  margin-right: calc(${Spacing.Small} + ${Spacing.XSmall});
`;
