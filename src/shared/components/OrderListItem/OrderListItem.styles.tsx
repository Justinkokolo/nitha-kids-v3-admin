// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  position: relative;
  padding: ${Spacing.Medium} ${Spacing.Large};
  width: 100%;
  background-color: ${Color.white};
  border-radius: ${Spacing.Small};
  border: 1px solid ${Color.lightBorder};
  box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  -webkit-box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  -moz-box-shadow: 1px 0px 5px 0px rgba(225,225,225,0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${Spacing.Small};
  z-index: 1;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 2;
`;

export const DetailsInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  border-radius: ${Spacing.XSmall};
  width: ${Spacing.XXLarge};
  height: ${Spacing.XXLarge};
  margin-right: ${Spacing.Medium};
`;

export const DefaultWrapper = styled.div<{ flex: Number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  ${({ flex }) =>
    flex &&
    `
    flex: ${flex};
  `}
`;

export const ColorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


export const ColorItem = styled.div<{ color: String }>`
  width: ${Spacing.Medium};
  height: ${Spacing.Medium};
  background-color: ${props => props.color};
  border-radius: 100px;
  margin-right: ${Spacing.XSmall};
  border: 1px solid ${Color.lightBorder};
`;
