// Libs
import styled from 'styled-components';

// Utils
import { Spacing } from '../../../constants/spacing';

export const Wrapper = styled.div`
  position: relative;
  margin-top: ${Spacing.Medium};
  overflow: hidden;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabWrapper = styled.div`
  margin-right: ${Spacing.XLarge};
`;