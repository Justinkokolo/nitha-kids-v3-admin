// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../shared/constants/colors';
import { Spacing } from '../../shared/constants/spacing';

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  background-color: ${Color.white};
  border-radius: ${Spacing.Small};
  width: 330px;
`;

export const Logo = styled.img`
  height: 96px;
  width: auto;
  margin-bottom: ${Spacing.Large};
`;

export const ExternalLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Line = styled.div`
  width: 128px;
  border-bottom: 1px solid ${Color.lightBorder};
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: ${Spacing.XLarge};
  top: ${Spacing.XLarge};

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Column = styled.div`
  width: 170px;
`;
