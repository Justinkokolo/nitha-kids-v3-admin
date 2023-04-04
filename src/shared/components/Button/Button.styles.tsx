// Libs
import styled from "styled-components";

// Utils
import { Color } from "../../constants/colors";
import { FontSize, FontWeight } from "../../constants/fonts";
import { Type } from "../../constants/size";
import { Spacing } from "../../constants/spacing";

export const Wraper = styled.button<{
  size: Type,
  backgroundColor: Color,
  color: Color,
  paddingHorizontal: Spacing,
  withFullWidth: Boolean,
  isLoading: Boolean,
  disabled: Boolean,
  withBorder: Boolean,
  withIcon: Boolean,
  newsletter: Boolean,
}>`
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Bold};
  outline: none;
  appearance: none;
  border-radius: ${Spacing.XSmall};
  padding: ${(props) => props.paddingHorizontal};
  width: ${(props) => (props.withFullWidth === true ? "100%" : "auto")};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid
    ${(props) =>
      props.withBorder === true ? Color.lightBorder : "transparent"};

  ${({ size }) =>
    size === Type.Small &&
    `
    height: ${Spacing.XLarge};
    padding: 0 ${Spacing.Large};
  `}

  ${({ size }) =>
    size === Type.Medium &&
    `
    height: calc(${Spacing.XLarge} + ${Spacing.Small});
    padding: 0 ${Spacing.XLarge};
  `}

  ${({ size }) =>
    size === Type.Large &&
    `
    height: calc(${Spacing.Large} + ${Spacing.Medium} + ${Spacing.Small});
    padding: 0 ${Spacing.XLarge};
  `}

  ${({ size }) =>
    size === Type.XLarge &&
    `
    height: calc(${Spacing.Large} + ${Spacing.Medium} + ${Spacing.ExtraSmall});
    padding: 0 calc(${Spacing.XLarge} + ${Spacing.ExtraSmall});
  `}

  ${({ size }) =>
    size === Type.XXLarge &&
    `
    height: calc(${Spacing.Large} + ${Spacing.Large} + ${Spacing.ExtraSmall});
    width: calc(${Spacing.XXXLarge} * 4);
    font-size: ${FontSize.Medium};
  `}

  ${({ withIcon }) =>
    withIcon &&
    `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition: all 100ms ease-in-out;

    &:hover {
      padding-right: ${Spacing.Large};
      transition: all 120ms ease-in-out;
    }
  `}


  ${({ isLoading }) =>
    isLoading &&
    `
    cursor: not-allowed;
    opacity: 0.7;
  `}

  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed !important;
    opacity: 0.7 !important;
  `}

  ${({ newsletter }) =>
    newsletter &&
    `
    padding: 0 ${Spacing.XLarge};
    font-size: ${FontSize.Small} !important;
    height: calc(${Spacing.XXLarge} + ${Spacing.Small} - 1px);
  `}

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
