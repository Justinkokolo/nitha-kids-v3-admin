// Libs
import styled from 'styled-components';

// Utils
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  position: relative;
`;

export const CountriesListWrapper = styled.div`
  position: relative;
  width: 96px;
  margin-right: 0;
  height: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: ${Spacing.Small};
  display: flex;
  align-items: center;
  bottom: 4px;
  cursor: pointer;
  height: ${Spacing.XXLarge};
`;
