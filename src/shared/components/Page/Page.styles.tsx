// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${Color.lightGray};
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: ${Spacing.XXXLarge};
`;
