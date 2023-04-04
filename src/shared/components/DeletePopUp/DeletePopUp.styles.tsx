// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999999 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopUp = styled.div`
  width: 380px !important;
  border: 1px solid ${Color.border};
  border-radius: ${Spacing.Small};
  background-color: ${Color.white};
  overflow: hidden;
`;

export const Content = styled.div`
  padding: ${Spacing.Large};
`;

export const ButtonsContainer = styled.div`
  height: calc(${Spacing.XLarge} + ${Spacing.Medium});
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button<{ color: Color, backgroundColor: Color, isLoading: Boolean }>`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color || Color.default};
  background-color: ${props => props.backgroundColor};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.SemiBold};
  text-transform: capitalize;
  border-top: 1px solid ${props => props.backgroundColor === Color.gray ? Color.lightBorder : 'transparent'};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  ${({ isLoading }) =>
    isLoading &&
    `
    cursor: not-allowed;
    opacity: 0.7;
  `}
`;
