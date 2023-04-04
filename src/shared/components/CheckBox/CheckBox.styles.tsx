// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div<{ selected: Boolean }>`
  transition: all 150ms ease-in-out;
  width: calc(${Spacing.Medium} + 2px);
  height: calc(${Spacing.Medium} + 2px);
  border-radius: 2.5px;
  border: 2px solid ${Color.checkbox};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ selected }) =>
    selected &&
    `
    transition: all 120ms ease-in-out;
    background-color: ${Color.darkBlue};
    border-color: ${Color.darkBlue};
  `}
`;