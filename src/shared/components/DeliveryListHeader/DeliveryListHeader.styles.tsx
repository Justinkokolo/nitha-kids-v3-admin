// Libs
import styled from 'styled-components';

// Utils
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  position: relative;
  padding: calc(${Spacing.Small} + ${Spacing.XSmall}) ${Spacing.Large};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;