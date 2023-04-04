// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { FontSize } from '../../constants/fonts';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div<{ scrollTop: Number }>`
  padding: ${Spacing.Large} 0;
  transition: all 120ms ease-in-out;
  margin: ${Spacing.XLarge} 0 ${Spacing.XSmall} 0;
  display: flex;
  align-items: center;

  ${({ scrollTop }) =>
    scrollTop > 40 &&
    `
    transition: all 120ms ease-in-out;
  `}
`;

export const Divider = styled.p`
  padding: 0 calc(${Spacing.Small} + ${Spacing.XSmall});
  margin: 0;
  color: ${Color.darkBlue};
  font-size: ${FontSize.Small};
`;
