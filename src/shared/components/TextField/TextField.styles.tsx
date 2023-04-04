// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-family: 'Inter' !important;
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.SemiBold};
  color: ${Color.darkBlue};
  margin-bottom: ${Spacing.Small};
`;

export const Input = styled.input<{ withError: Boolean, newsletter: Boolean }>`
  border: 1px solid ${props => props.withError === true ? Color.red : Color.lightBorder};
  height: ${Spacing.XXLarge};
  border-radius: ${Spacing.XSmall};
  padding: 0 ${Spacing.Medium};
  outline: none;
  color: ${Color.textDark};
  font-size: ${FontSize.Small} !important;
  margin-bottom: ${Spacing.XSmall};

  ${({ newsletter }) =>
    newsletter &&
    `
    font-size: ${FontSize.Medium} !important;
    height: calc(${Spacing.XXLarge} + ${Spacing.Small});
    border: 1px solid ${Color.white};
    padding: 0 ${Spacing.Large};
  `}

  &:focus {
    border-color: ${Color.darkBlue};
  }
`;

export const PhoneNumberInput = styled.input<{ withError: Boolean, newsletter: Boolean }>`
  border: 1px solid ${props => props.withError === true ? Color.red : Color.lightBorder};
  height: ${Spacing.XXLarge};
  border-radius: ${Spacing.XSmall};
  padding: 0 ${Spacing.Medium};
  outline: none;
  color: ${Color.textDark};
  font-size: ${FontSize.Small} !important;
  margin-bottom: ${Spacing.XSmall};
  width: calc(100% - 112px);

  ${({ newsletter }) =>
    newsletter &&
    `
    font-size: ${FontSize.Medium} !important;
    height: calc(${Spacing.XXLarge} + ${Spacing.Small});
    border: 1px solid ${Color.white};
    padding: 0 ${Spacing.Large};
  `}

  &:focus {
    border-color: ${Color.darkBlue};
  }
`;

export const TextArea = styled.textarea<{ withError: Boolean }>`
  border: 1px solid ${props => props.withError === true ? Color.red : Color.lightBorder};
  height: calc(${Spacing.XXXLarge} + ${Spacing.XLarge});
  border-radius: ${Spacing.XSmall};
  padding: ${Spacing.Medium};
  outline: none;
  color: ${Color.textDark};
  font-size: ${FontSize.Small} !important;
  margin-bottom: ${Spacing.XSmall};
  resize: none;

  &:focus {
    border-color: ${Color.blue};
  }
`;

