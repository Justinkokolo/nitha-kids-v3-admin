// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99999999999 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopUp = styled.div`
  width: 986px !important;
  border: 1px solid ${Color.border};
  border-radius: ${Spacing.Small};
  background-color: ${Color.white};
  overflow: hidden;
  position: relative;
`;

export const Content = styled.div`
  padding: ${Spacing.Large};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: ${Spacing.Large};
  right: ${Spacing.Large};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${Spacing.Small};
  z-index: 9999999 !important;
`;
