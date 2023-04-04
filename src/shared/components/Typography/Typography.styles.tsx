// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div<{
  clickable: Boolean,
}>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  ${({ clickable }) =>
    clickable &&
    `
    &:hover {
      cursor: pointer;
      color: ${Color.darkBlue};
      opacity: 1 !important;
    }
  `}
`;

export const Paragraph = styled.p<{
  size: FontSize,
  weight: FontWeight,
  color: Color,
  paddingHorizontal: Spacing,
  centered: Boolean,
  withLetterSpacing: Boolean,
  opacity: Number,
  italic: Boolean
}>`
  margin: 0;
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  padding: 0 ${props => props.paddingHorizontal};
  text-align: ${props => props.centered ? 'center' : 'left'};
  
  a {
    cursor: pointer;
    color: ${Color.blue}
  }

  ${({ opacity }) =>
    opacity &&
    `
    &:hover {
      opacity: ${opacity};
    }
  `}

  ${({ withLetterSpacing }) =>
    withLetterSpacing &&
    `
    letter-spacing: 0.6px !important;
  `}

  ${({ italic }) =>
    italic &&
    `
    font-style: italic;
  `}

  ${({ size }) =>
    size &&
    `
    line-height: calc(${size} * 1.5);
  `}
`;

export const InneText = styled.span`
  position: relative;
`;

export const SmallText = styled.span`
  font-weight: ${FontWeight.Light};
`;

export const Badge = styled.span<{ large: Boolean }>`
  font-weight: ${FontWeight.SemiBold};
  position: absolute;
  font-size: ${FontSize.XXXSmall};
  right: -${Spacing.Medium};
  top: -${Spacing.Small};
  opacity: 0.4;

  ${({ large }) =>
    large &&
    `
    font-size: ${FontSize.XSmall};
    top: -${Spacing.Large};
  `}
`;

export const CheckBoxWrapper = styled.div`
  margin-right: ${Spacing.XLarge};
`;

export const Suffix = styled.span<{ color: Color, clickable: Boolean }>`
  color: ${props => props.color};
  font-weight: ${FontWeight.SemiBold};
  
  ${({ clickable }) =>
    clickable &&
    `
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  `}
`;
