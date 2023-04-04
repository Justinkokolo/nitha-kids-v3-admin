// Libs
import styled from 'styled-components';

// Utils
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${Spacing.XXXLarge} 0 calc(${Spacing.XXXLarge} * 2) 0;
`;
