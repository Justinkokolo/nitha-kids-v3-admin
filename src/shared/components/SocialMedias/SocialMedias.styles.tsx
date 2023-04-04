// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';
import { Type } from '../../constants/size';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const IconWrapper = styled.div<{ backgroundColor: Color, size: Type }>`
  width: ${props => props.size === Type.Small ? '26px' : '32px'};
  height: ${props => props.size === Type.Small ? '26px' : '32px'};
  border-radius: 100%;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;
  margin-left: ${props => props.size === Type.Small ? '6px' : Spacing.Small};

  &:hover {
    opacity: 0.85;
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }
`;
