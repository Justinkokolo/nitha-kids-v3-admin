// Libs
import styled from 'styled-components';

// Utils
import { Spacing } from '../../constants/spacing';
import { Color } from '../../constants/colors';
import { FontSize } from '../../constants/fonts';

export const Text = styled.span<{ size: FontSize, color: Color, backgroundColor: Color, borderColor: Color, clickable: Boolean }>`
  font-size: ${props => props.size};
  color: ${props => props.color};
  padding: calc(${Spacing.XSmall} + 2px) ${Spacing.ExtraSmall};
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};
  border-radius: ${Spacing.XSmall};
  margin: ${Spacing.Small} ${Spacing.Small} 0 0;

  ${({ clickable }) =>
    clickable &&
    `
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  `}
`;
