// Libs
import styled from 'styled-components';

// Utils
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div<{ size: Spacing }>`
  margin-bottom: ${props => props.size};
`;
