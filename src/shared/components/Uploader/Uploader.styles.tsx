// Libs
import styled from 'styled-components';

// Utils
import { Spacing } from '../../constants/spacing';
import { Color } from '../../constants/colors';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 1px dashed ${Color.border};
  border-radius: ${Spacing.Small};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  background-color: ${Color.white};
`;

export const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${Spacing.Small};
`;
