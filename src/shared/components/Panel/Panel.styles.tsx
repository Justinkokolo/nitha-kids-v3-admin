// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';
import { Type } from '../../constants/size';

export const Wrapper = styled.div<{ size: Type }>`
  position: relative;
  background-color: ${Color.white};
  border-radius: ${Spacing.Small};
  box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  -webkit-box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  -moz-box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${props => props.size === Type.Small ? Spacing.XSmall : Spacing.Small};
  border: 1px solid ${Color.lightBorder};

  ${({ size }) => size === Type.Small && `
    padding: ${Spacing.Small} ${Spacing.Large};
  `}

  ${({ size }) => size === Type.Medium && `
    padding: ${Spacing.Medium} ${Spacing.Large};
  `}

  ${({ size }) => size === Type.Large && `
    padding: ${Spacing.Large};
  `}
`;